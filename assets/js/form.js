class Form {
  constructor() {
    this.node = document.createElement('div');
    this.node.classList.add('rent-form');
    this.form = document.createElement('form');
    this.node.appendChild(this.form);
    this.form.innerHTML = `
        <input value="20000" type="number" required name="monthlyRent" placeholder="Monthly Rent">
        <input value="Rakker Dharamshala" type="text" required name="houseAddress"  placeholder="House Address">
        <input value="Ashwani Goswami" type="text" required name="tenantName" placeholder="Tenant's name">
        <input value="Gururaj Singh" type="text" required name="ownerName" placeholder="Owner's name">
        <input value="CTUPK1324" type="text" required name="ownerPAN" placeholder="owner's PAN">
        <label for="start">Start Date</label>
        <input value="2018-02-01" type="date" required name="startDate" id="start">
        <label for="end">End Date</label>
        <input value="2018-05-01" type="date" required name="endDate" id="end">
        <button>Submit</button>
        `;
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      var userData = Object.values(this.form).reduce((acc, val) => {
        if (val.name === 'startDate' || val.name === 'endDate') {
          acc[val.name] = val.valueAsDate;
        } else {
          acc[val.name] = val.value;
        }
        return acc;
      }, {});

      console.log(userData);
      var userInfo = new Receipt(userData);
      this.node.replaceChild(userInfo.node, this.form);
    });
  }
}
