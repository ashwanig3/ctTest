class Receipt {
  constructor(data) {
    this.userData = data;
    this.node = document.createElement('div');
    this.node.classList.add('receipt-container');
    this.monthName = {
      '01': 'January',
      '02': 'February',
      '03': 'March',
      '04': 'April',
      '05': 'May',
      '06': 'June',
      '07': 'July',
      '08': 'August',
      '09': 'September',
      '10': 'October',
      '11': 'November',
      '12': 'December',
    };
    this.node.innerHTML = `
            <div class="receipt-header">
            <h1 class="receipt-heading">Rent Receipt</h1>
            <span class="date">${
              this.monthName[this.userData.endDate.split('-')[1]]
            } - ${this.userData.endDate.split('-')[0]}</span>
            </div>
            <span>Generated on cleartax(cleartax.in/save/rent)</span>
            <p>Received sum of INR Rs.${this.userData.monthlyRent} from ${
      this.userData.tenantName
    } towards the rent of property located at ${
      this.userData.houseAddress
    } for the
            period from ${this.userData.startDate} to ${this.userData.endDate}
            </p>
            <div class="regard">
                <span>${this.userData.ownerName}</span>
                <span>PAN: ${this.userData.ownerPAN}</span>
            </div>
        `;
  }
}
