<template>
<div class="container">
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
  <h3 class="text-danger" v-if="isAuthentic === false">RESULT: UNKNOWN COMMUNIQUE.</h3><br>

<div>
  <form method="post" :action="`${API_HOST}/test`" @submit.prevent="sendFile">
    <input name="communique" type="file" id="communique"/><br><br>
    <input type='submit' value='VERIFY' class="btn btn-primary btn-lg"/>
  </form>
</div>
<pdf
 style="display: inline-block; width: 32%"
 @loaded="displayContent"
 :src="pdfContent"
 ref="pdfComponent"
>
</pdf>
<br>
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
// import verifyPDF from '@ninja-labs/verify-pdf';

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
      pdfContent: null,
      pdfUploaded: false,
      qrcode: null,
      API_HOST: 'http://127.0.0.1:3000',
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
      this.$refs.pdfComponent.pdf.getPage(1).then(page => {
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
                    console.log('BOOOM ==>', img.toDataURL());
                    const result = jsQR(img.data, img.width, img.height);
                    console.log('RESUlT ===>', result);
                    //new Uint8ClampedArray()
                });
                }
            });
        });
        }
    });

    },

    async sendFile() {
      const input = document.getElementById('communique')
      const file = input.files[0]
      let reader = new FileReader();
      let fileByteArray = [];
      reader.readAsArrayBuffer(file);
      reader.onloadend = function (evt) {
      if (evt.target.readyState == FileReader.DONE) {
       let arrayBuffer = evt.target.result,
           array = new Uint8Array(arrayBuffer);
       for (var i = 0; i < array.length; i++) {
           fileByteArray.push(array[i]);
        }
       this.pdfContent = fileByteArray;
        }
        }
      const formData = new FormData()
      formData.append(input.id, file)
      const response = await fetch(`${this.API_HOST}/test`, {
           method: 'POST',
           headers: {},
           body: formData
      }).then((response)=> {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
        }).then((response)=> {
           this.isAuthentic = true;
          }).catch(() => {
            this.isAuthentic = false;
          });
      console.log(response);
    }
  }
}
</script>
