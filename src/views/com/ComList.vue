<template>
  <div class="container">
    <div class="view-account">
      <section class="module">
        <div class="module-inner">
          <div class="side-bar">
            <div class="user-info">
              <img
                class="img-profile img-circle img-responsive center-block"
                src="https://bootdey.com/img/Content/avatar/avatar6.png"
                alt
              />
              <ul class="meta list list-unstyled">
                <li class="name">
                  {{ user.username }}
                  <label class="label label-info">Administrator</label>
                </li>
                <li class="email">
                  <a href="#">{{ user.username }}.S@website.com</a>
                </li>
                <li class="activity">Last logged in: Today at 2:18pm</li>
              </ul>
            </div>
            <nav class="side-menu">
              <ul class="nav">
                <li>
                  <a href="#">
                    <span class="fa fa-user"></span> Profile
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="fa fa-cog"></span> Settings
                  </a>
                </li>
                <li class="active">
                  <a href="#">
                    <span class="fa fa-credit-card"></span> Billing
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="fa fa-envelope"></span> Messages
                  </a>
                </li>

                <li>
                  <a href="user-drive.html">
                    <span class="fa fa-th"></span> Drive
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="fa fa-clock-o"></span> Reminders
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div class="content-panel">
            <div class="content-header-wrapper">
              <h2 class="title">My Drive</h2>
              <div class="actions">
                <button class="btn btn-success">
                  <i class="fa fa-plus"></i> Upload New Item
                </button>
              </div>
            </div>
            <div class="content-utilities">
              <div class="page-nav">
                <span class="indicator">View:</span>
                <div class="btn-group" role="group">
                  <button
                    class="active btn btn-default"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title
                    data-original-title="Grid View"
                    id="drive-grid-toggle"
                  >
                    <i class="fa fa-th-large"></i>
                  </button>
                  <button
                    class="btn btn-default"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title
                    data-original-title="List View"
                    id="drive-list-toggle"
                  >
                    <i class="fa fa-list-ul"></i>
                  </button>
                </div>
              </div>
              <div class="actions">
                <div class="btn-group">
                  <button
                    class="btn btn-default dropdown-toggle"
                    data-toggle="dropdown"
                    type="button"
                    aria-expanded="false"
                  >
                    All Items
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="#">
                        <i class="fa fa-file"></i> Documents
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-file-image-o"></i> Images
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-file-video-o"></i> Media Files
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-folder"></i> Folders
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="btn-group">
                  <button
                    class="btn btn-default dropdown-toggle"
                    data-toggle="dropdown"
                    type="button"
                    aria-expanded="false"
                  >
                    <i class="fa fa-filter"></i> Sorting
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="#">Newest first</a>
                    </li>
                    <li>
                      <a href="#">Oldest first</a>
                    </li>
                  </ul>
                </div>
                <div class="btn-group" role="group">
                  <button
                    type="button"
                    class="btn btn-default"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title
                    data-original-title="Refresh"
                  >
                    <i class="fa fa-refresh"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-default"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title
                    data-original-title="Archive"
                  >
                    <i class="fa fa-archive"></i>
                  </button>

                  <button
                    type="button"
                    class="btn btn-default"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title
                    data-original-title="Report spam"
                  >
                    <i class="fa fa-exclamation-triangle"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-default"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title
                    data-original-title="Delete"
                  >
                    <i class="fa fa-trash-o"></i>
                  </button>
                </div>
              </div>
            </div>

            <div class="drive-wrapper drive-grid-view">
              <div class="grid-items-wrapper">

                <div
                 v-for="com in coms" :key="com.name"
                 class="drive-item module text-center"
                 >
                  <div class="drive-item-inner module-inner">
                    <div class="drive-item-title">
                      <a :href="`${API_HOST}/api/containers/communique/download/${com.name}`">
                          {{ com.name }}
                      </a>
                    </div>
                    <div class="drive-item-thumb">
                      <a :href="`${API_HOST}/api/containers/communique/download/${com.name}`">
                        <i class="fa fa-file-pdf-o text-info"></i>
                      </a>
                    </div>
                  </div>
                  <div class="drive-item-footer module-footer">
                    <ul class="utilities list-inline">
                      <li>
                        <a
                          :href="`${API_HOST}/sign?filename=${com.name}`"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Sign the document"
                          data-original-title="Sign the document"
                        >
                          <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            <div class="drive-wrapper drive-list-view">
              <div class="table-responsive drive-items-table-wrapper">
                <table class="table">
                  <thead>
                    <tr>
                      <th class="type"></th>
                      <th class="name truncate">Name</th>
                      <th class="date">Uploaded</th>
                      <th class="size">Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="com in coms" :key="com.name">
                      <td class="type">
                        <i class="fa fa-file-pdf-o text-info"></i>
                      </td>
                      <td class="name truncate">
                        <a :href="`${API_HOST}/api/containers/communique/download/${com.name}`">
                            {{com.name}}
                        </a>
                      </td>
                      <td class="date">{{ com.mtime }}</td>
                      <td class="size">{{ (com.size/1024).toFixed(2) }} KB</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  name: 'ComList',
  data() {
    return {
      coms: [],
      API_HOST: 'http://127.0.0.1:3000'
    };
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
    })
  },
  mounted() {
    this.getAllCom();
  },
  methods: {
    getAllCom() {
      axios.get(`${this.API_HOST}/api/containers/communique/files`)
        .then(({data}) => { this.coms = data; });
    },
    getCom(filename) {
      window.location = `${this.API_HOST}/api/containers/communique/download/${filename}`;
    }
  }
};
</script>
