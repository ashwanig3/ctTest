class Form {
  constructor() {
    this.node = document.createElement('div');
    this.node.classList.add('rent-form');
    this.form = document.createElement('form');
    this.node.appendChild(this.form);
    this.form.innerHTML = `
        <input type="number" required name="monthlyRent" placeholder="Monthly Rent">
        <input type="text" required name="houseAddress"  placeholder="House Address">
        <input type="text" required name="tenantName" placeholder="Tenant's name">
        <input type="text" required name="ownerName" placeholder="Owner's name">
        <input type="text" required name="ownerPAN" placeholder="owner's PAN">
        <label for="start">Start Date</label>
        <input type="date" required name="startDate" id="start">
        <label for="end">End Date</label>
        <input type="date" required name="endDate" id="end">
        <button>Submit</button>
        `;
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      var userData = Object.values(this.form).reduce((acc, val) => {
        acc[val.name] = val.value;
        return acc;
      }, {});
      var userInfo = new Receipt(userData);
      this.node.replaceChild(userInfo.node, this.form);
    });
  }
  addDaysToMonth() {
    var startDate = new Date(this.userData.startDate);
    var addedDate = new Date(startDate);

    addedDate.setDate(addedDate.getDate() + 30);
  }
}
