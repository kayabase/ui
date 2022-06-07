<template>
  <div>
    <div class="card p-3">
      <h4 v-if="databaseData">{{ databaseData.name }}</h4>
      <hr />
      <span class="text-primary fw-bold">Tables</span>
      <div class="mt-5 d-flex justify-content-between">
        <div>
          <svg
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.128568 2.26839L2.31563 0.125478C2.48647 -0.0418526 2.7636 -0.0417991 2.93434 0.125478L5.12132 2.26839C5.39667 2.53812 5.20059 3.00001 4.81195 3.00001H3.5V11.5714C3.5 11.8081 3.30414 12 3.0625 12H2.1875C1.94586 12 1.75 11.8081 1.75 11.5714V3.00001H0.437935C0.0485329 3.00001 -0.146209 2.53758 0.128568 2.26839ZM6.5625 1.7143H13.5625C13.8041 1.7143 14 1.52243 14 1.28573V0.428584C14 0.191879 13.8041 1.34454e-05 13.5625 1.34454e-05H6.5625C6.32086 1.34454e-05 6.125 0.191879 6.125 0.428584V1.28573C6.125 1.52243 6.32086 1.7143 6.5625 1.7143ZM6.125 4.71429V3.85715C6.125 3.62045 6.32086 3.42858 6.5625 3.42858H11.8125C12.0541 3.42858 12.25 3.62045 12.25 3.85715V4.71429C12.25 4.951 12.0541 5.14287 11.8125 5.14287H6.5625C6.32086 5.14287 6.125 4.951 6.125 4.71429ZM6.125 11.5714V10.7143C6.125 10.4776 6.32086 10.2857 6.5625 10.2857H8.3125C8.55414 10.2857 8.75 10.4776 8.75 10.7143V11.5714C8.75 11.8081 8.55414 12 8.3125 12H6.5625C6.32086 12 6.125 11.8081 6.125 11.5714ZM6.125 8.14286V7.28572C6.125 7.04901 6.32086 6.85715 6.5625 6.85715H10.0625C10.3041 6.85715 10.5 7.04901 10.5 7.28572V8.14286C10.5 8.37957 10.3041 8.57143 10.0625 8.57143H6.5625C6.32086 8.57143 6.125 8.37957 6.125 8.14286Z"
              fill="#C5C7CD"
            />
          </svg>
          <span class="me-4"> Sort</span>

          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4369 0H0.563154C0.0635131 0 -0.188604 0.606234 0.165419 0.960258L4.5 5.29549V10.125C4.5 10.3085 4.58955 10.4805 4.73993 10.5858L6.61493 11.8979C6.98484 12.1568 7.5 11.8944 7.5 11.437V5.29549L11.8347 0.960258C12.188 0.606937 11.9376 0 11.4369 0Z"
              fill="#C5C7CD"
            />
          </svg>

          Filter
        </div>
        <div>
          <button
            class="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal2"
          >
            Add New
          </button>
        </div>

        <!-- MODAL -->
        <div
          class="modal fade"
          id="exampleModal2"
          tabindex="-1"
          aria-labelledby="exampleModal2Label"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModal2Label">New Table</h5>
                <button
                  type="button"
                  class="btn-close"
                  id="detail-modal-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  @click="closeEditModal"
                ></button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="mb-3">
                    <label
                      for="login-email"
                      class="form-label text-muted"
                      style="font-size: 14px"
                      >Name</label
                    >
                    <input
                      type="text"
                      class="form-control bg-light-gray"
                      id="login-email"
                      placeholder="Table Name"
                      v-model="tableForm.name"
                    />
                  </div>
                </div>
                <div v-if="!isEdit">
                  <hr />
                  Columns
                  <div class="row">
                    <div class="mb-3">
                      <label
                        for="login-email"
                        class="form-label text-muted"
                        style="font-size: 14px"
                        >Name</label
                      >
                      <input
                        type="text"
                        class="form-control bg-light-gray"
                        id="login-email"
                        placeholder="Column Name"
                        v-model="tableForm.columns[0].name"
                      />
                    </div>
                    <div class="mb-3">
                      <select
                        class="form-select"
                        aria-label="Type"
                        v-model="tableForm.columns[0].type"
                      >
                        <option value="string">String</option>
                        <option value="integer">Integer</option>
                        <option value="boolean">Boolean</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label
                        for="login-email"
                        class="form-label text-muted"
                        style="font-size: 14px"
                        >Length</label
                      >
                      <input
                        type="number"
                        class="form-control bg-light-gray"
                        id="login-email"
                        placeholder="Column Length"
                        v-model="tableForm.columns[0].length"
                      />
                    </div>
                    <div class="mb-3">
                      <input
                        type="checkbox"
                        id="check"
                        class="form-check-input bg-light-gray"
                        v-model="tableForm.columns[0].nullable"
                      />
                      <label
                        for="check"
                        class="form-check-input-label text-muted"
                        style="font-size: 14px"
                        >Nullable</label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  <span v-if="loadingBtn">
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#fff"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <g transform="translate(1 1)" stroke-width="2">
                          <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
                          <path d="M36 18c0-9.94-8.06-18-18-18">
                            <animateTransform
                              attributeName="transform"
                              type="rotate"
                              from="0 18 18"
                              to="360 18 18"
                              dur="1s"
                              repeatCount="indefinite"
                            />
                          </path>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span v-else> Close </span>
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="saveTable"
                >
                  <span v-if="loadingBtn">
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#fff"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <g transform="translate(1 1)" stroke-width="2">
                          <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
                          <path d="M36 18c0-9.94-8.06-18-18-18">
                            <animateTransform
                              attributeName="transform"
                              type="rotate"
                              from="0 18 18"
                              to="360 18 18"
                              dur="1s"
                              repeatCount="indefinite"
                            />
                          </path>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span v-else> {{ isEdit ? "Edit " : "Save" }} Table </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- MODAL -->
      </div>

      <table class="table">
        <thead>
          <tr>
            <th scope="col" v-for="(header, index) in colHeaders" :key="index">
              {{ header.label }}
            </th>
          </tr>
        </thead>
        <tbody v-if="databaseData">
          <tr v-for="data in databaseData.tables" :key="data.id">
            <th scope="row">{{ data.id }}</th>
            <td>{{ data.name }}</td>
            <td>
              <button
                class="btn btn-warning"
                @click="$router.push(`/table/${data.id}/detail`)"
              >
                Detail
              </button>
              <button
                class="btn btn-primary mx-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
                @click="openEditModal(data)"
              >
                Edit
              </button>
              <button class="btn btn-danger" @click="deleteTable(data)">
                <span v-if="loadingBtn">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 38 38"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#fff"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <g transform="translate(1 1)" stroke-width="2">
                        <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
                        <path d="M36 18c0-9.94-8.06-18-18-18">
                          <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 18 18"
                            to="360 18 18"
                            dur="1s"
                            repeatCount="indefinite"
                          />
                        </path>
                      </g>
                    </g>
                  </svg>
                </span>
                <span v-else> X </span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br />
  </div>
</template>

<script>
import TableService from "@/core/services/Table.js";
import DatabaseService from "@/core/services/Database.js";
export default {
  name: "DatabaseDetail",
  data() {
    return {
      colHeaders: [
        { value: "id", label: "ID" },
        { value: "name", label: "Name" },
        { value: "action", label: "..." },
      ],
      addRow: false,
      rowName: "",
      tableForm: {
        name: "",
        columns: [
          {
            name: "",
            type: "string",
            length: "",
            nullable: false,
          },
        ],
        database_id: this.$route.params.id,
      },
      databaseData: null,
      selectedId: null,
      isEdit: false,
      loadingBtn: false,
    };
  },
  methods: {
    openAddRow() {
      this.addRow = true;
      setTimeout(() => {
        const el = document.getElementById("rowNameText");
        el.focus();
      }, 200);
    },
    addRowFunc() {
      this.colHeaders.push(this.rowName);
      this.rowName = "";
      this.addRow = false;
    },
    async getDatabase() {
      const res = await DatabaseService.get(this.$route.params.id);
      this.databaseData = res.data;
    },
    async saveTable() {
      this.loadingBtn = true;
      try {
        if (this.isEdit) {
          await TableService.update(this.selectedId, {
            name: this.tableForm.name,
          });
        } else {
          await TableService.create(this.tableForm);
        }
        await this.getDatabase();
        this.tableForm = {
          name: "",
          columns: [
            {
              name: "",
              type: "string",
              length: "",
              nullable: false,
            },
          ],
          database_id: this.$route.params.id,
        };
        const clsBtn = document.querySelector("#detail-modal-close");
        clsBtn.click();
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingBtn = false;
      }
    },
    async deleteTable(item) {
      this.loadingBtn = true;
      try {
        await TableService.delete(item.id);
        await this.getDatabase();
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingBtn = false;
      }
    },
    openEditModal(data) {
      this.isEdit = true;
      this.tableForm.name = data.name;
      this.selectedId = data.id;
    },
    closeEditModal() {
      this.isEdit = false;
      this.tableForm.name = "";
      this.selectedId = null;
    },
  },
  mounted() {
    this.getDatabase();
  },
};
</script>

<style lang="scss">
@import "@/assets/css/bootstrap.sass";
.hover-btn {
  background-color: white;
}
.hover-btn:hover {
  background-color: $primary !important;
  color: white;
}
.modal {
  top: 72px !important;
}
.modal-backdrop {
  width: 0 !important;
  margin-top: 32px !important;
}
</style>
