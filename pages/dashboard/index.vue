<template>
  <div class="card">
    <DataTable v-model:expandedRows="expandedRows" :value="products" dataKey="id"
               @rowExpand="onRowExpand" @rowCollapse="onRowCollapse" tableStyle="min-width: 60rem">
      <!-- <template #header>
          <div class="flex flex-wrap justify-content-end gap-2">
              <Button text icon="pi pi-plus" label="Expand All" @click="expandAll" />
              <Button text icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
          </div>
      </template> -->
      <Column expander style="width: 5rem"/>
      <Column field="description" header="Job Description"></Column>
      <Column field="clientName" header="Client Name"></Column>
      <Column field="clientAddress" header="Address">
        <template #body="slotProps">
          {{ formatAddress(slotProps.data.clientAddress) }}
        </template>
      </Column>
      <Column field="timeRequired" header="Time"></Column>
      <Column field="jobDates" header="Date"></Column>
      <Column header="Status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.jobStatus" :severity="getSeverity(slotProps.data)"/>
        </template>
      </Column>
      <template #expansion="slotProps">
        <div class="p-3">
          <h5>Nurse Appointments for {{ slotProps.data.clientName }} requirement</h5>
          <DataTable :value="slotProps.data.users">
            <Column field="userId" header="Id" sortable></Column>
            <Column field="basicDetails" header="Name" sortable>
              <template #body="slotProps">
                {{ formatName(slotProps.data.basicDetails) }}
              </template>
            </Column>
            <Column field="basicDetails.gender" header="Gender"></Column>
            <Column field="pincode" header="Pincode" sortable>
              <template #body="slotProps">
                {{ formatPincode(slotProps.data.userAddress) }}
              </template>
            </Column>
            <Column field="educationHistory" header="Education" sortable>
              <template #body="slotProps">
                <Tag v-for="edu in slotProps.data.educationHistory" :value="formatEducation(edu)"/>
              </template>
            </Column>
            <Column field="workExperience" header="Experience" sortable>
              <template #body="slotProps">
                <Tag v-for="exp in slotProps.data.workExperience" :value="formatWork(exp)"/>
              </template>
            </Column>
            <Column field="userId" header="Approval" headerStyle="width:4rem">
              <template #body="slotProps">
                <Button @click="onApprove(slotProps.data.userId)">Approve</Button>
              </template>
            </Column>
          </DataTable>
        </div>
      </template>
    </DataTable>
    <Toast/>
  </div>
</template>

<script>
import {ProductService} from '~/api/ProductService';

export default {
  data() {
    return {
      products: null,
      expandedRows: []
    };
  },
  mounted() {
    ProductService.getProductsWithOrdersSmall().then((data) => (this.products = data));
  },
  methods: {
    onApprove(userId) {
      console.log("Found User Id", userId)
    },
    onRowExpand(event) {
      // this.$toast.add({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
    },
    onRowCollapse(event) {
      // this.$toast.add({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
    },
    expandAll() {
      this.expandedRows = this.products.filter((p) => p.id);
    },
    collapseAll() {
      this.expandedRows = null;
    },
    formatName(details) {
      return `${details.firstName} ${details.lastName} `
    },
    formatAddress(userAddress) {
      return `${userAddress.addressLine}, ${userAddress.city}, ${userAddress.pincode}`;
    },
    formatPincode(userAddress) {
      return userAddress?.postalCode;
    },
    formatCurrency(value) {
      return value.toLocaleString('en-US', {style: 'currency', currency: 'INR'});
    },
    formatEducation({degree, college}) {
      return `${degree}, ${college}`;
    },
    formatWork({jobTitle, institute}) {
      return `${jobTitle}, ${institute}`;
    },
    getSeverity(product) {
      switch (product.jobStatus) {
        case 'Submitted':
          return 'success';

        case 'Posted':
          return 'warning';

        case 'OUTOFSTOCK':
          return 'danger';

        default:
          return null;
      }
    },
    getOrderSeverity(order) {
      switch (order.status) {
        case 'DELIVERED':
          return 'success';

        case 'CANCELLED':
          return 'danger';

        case 'PENDING':
          return 'warning';

        case 'RETURNED':
          return 'info';

        default:
          return null;
      }
    }
  }
};
</script>