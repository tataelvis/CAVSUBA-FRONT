<template>
<div class="container">
  <canvas id="RGBCanvas" width="500" height="500" v-show="false"></canvas>
  <div v-if="scan">
    <br><br>
    <qrcode-stream @decode="onDecode"></qrcode-stream><br>
    <qrcode-drop-zone @decode="onDecode"></qrcode-drop-zone><br>
    <qrcode-capture @decode="onDecode"></qrcode-capture>
  </div>
    <br><br><br>

  <p class="text-danger" v-if="isAuthentic === false">FAKE DOCUMENT.</p>
<h1>COMMUNIQUE VERIFICATION</h1>
<br>
<h2 class="text-primary">Upload a communique for verification</h2>
<br>
    <h3 class="text-success" v-if="isAuthentic">
      <!--<i class="fa fa-check fa-5x" aria-hidden="true"></i>-->
          <br>
        RESULT: DOCUMENT IS AUTHENTIC!
    </h3>
  <h3 class="text-danger" v-if="message">RESULT: UNKNOWN COMMUNIQUE.</h3><br>
<pdf
 style="display: inline-block; width: 32%"
 @loaded="displayContent"
 :src="pdfContent"
 v-if="pdfUploaded"
 ref="pdfComponent"
>
</pdf><br><br>
<input
id="files"
type="file"
@change="handleFileChange"
/><br><br>
<h3>Steps to follow</h3>
<ol>
 <li>
    For digital files move to step 2; for paper-based  move to directly to step 3.
 </li>
 <li>
    Open the file on a different device  (phone, tablet, laptop).
 </li>
  <li>
    Click on the 'Scan QR-Code' button below and authorize the access to the camera.
 </li>
  <li>
    Using your camera, scan the portion of the file containing the QR-code.
 </li>
  <li>
    That's it! You are done. After scanning, the result of the verification process will be displayed on the screen
 </li>
</ol>
<br><br>
<div>
  <button  class="btn btn-primary btn-lg" @click="scan = true">Scan QR-Code</button>
  <br><br>
</div>
</div>
</template>

<script>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader';
import pdf from 'vue-pdf';
import axios from 'axios';
import PDFJS from 'pdfjs-dist';
import jsQR from "jsqr";

export default {
  name: 'Verify',
  components: {
    QrcodeStream,
    QrcodeDropZone,
    QrcodeCapture,
    pdf
  },
  data() {
    return {
      scan: false,
      isAuthentic: null,
      message: '',
      pdfContent: '',
      pdfUploaded: false,
      qrcode: null,
      API_HOST: 'http://127.0.0.1:3000'
    };
  },
  methods: {
    onDecode(code) {
      console.log('sig ===>', code);
      axios.post(`${this.API_HOST}/verify`, {
        data: code
      }).then(({data})=> {
          if(data.result) {
            this.isAuthentic = true;
          } else if(data.message) {
            this.message = data.message;
          }
      }).catch(e=>{ this.message = 'UNKNOWN COMMUNIQUE';});
    },
    handleFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return true;
      }
      const reader = new FileReader();
      reader.onload = e => {
        this.pdfContent = e.target.result;
        this.pdfUploaded = true;
      };
      reader.readAsDataURL(files[0]);
      return true;
    },

    displayContent() {
      const self = this;
      let pageNum = 0;
      this.$refs.pdfComponent.pdf.forEachPage(page => {
        pageNum = pageNum + 1;
        if (pageNum = 1) {
        page.getOperatorList().then(function(ops) {
            console.log('ops', ops);
            const fns = ops.fnArray,
                  args = ops.argsArray;
            let imgsFound = 0;
            args.forEach((arg, i) => {
                if (fns[i] !== PDFJS.OPS.paintImageXObject) { return; }
                console.log('loading', arg);
                imgsFound++;
                const imgKey = arg[0];
                if (imgsFound === 2) {
                page.objs.get(imgKey, img => {
                    console.log('BOOOM ==>', img.data);
                    const imgRGBA = self.changeRGBToRGBA(img);
                    const result = jsQR(img.data, img.width, img.height);
                    console.log('RESUlT ===>', imgRGBA);
                    //new Uint8ClampedArray()
                });
                }
            });
        });
        }
    });

    },
  }
}
</script>
