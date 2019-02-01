class Receipt {
  constructor(data) {
    this.userData = data;
    this.node = document.createElement('div');
    this.singleReceipt = document.createElement('div');
    this.singleReceipt.classList.add('single-receipt');
    this.node.classList.add('receipt-container');
    this.monthsData = [];

    this.multipleMonths = this.addMultipleReciepts(this.userData);

    this.monthName = {
      1: 'January',
      2: 'February',
      3: 'March',
      4: 'April',
      5: 'May',
      6: 'June',
      7: 'July',
      8: 'August',
      9: 'September',
      10: 'October',
      11: 'November',
      12: 'December',
    };

    this.node.innerHTML += this.monthsData
      .map((monthData, i) => {
        return (this.singleReceipt.innerHTML = `
        <div class="receipt-item">
            <div class="receipt-header-wrapper">
            <div>
              <div class="receipt-header">
              <h1 class="receipt-heading">Rent Receipt</h1>
              <span class="date">${
                this.monthName[monthData.endDate.getMonth()]
              } - ${monthData.endDate.getFullYear()}</span>
              </div>
              <span class="description">Generated on cleartax(cleartax.in/save/rent)</span>
            </div>
            <div>
              <span class="side-bar">Receipt No: ${i + 1}</span>
              <span class="side-bar">Date: ${monthData.endDate.getDate()}-${
          this.monthName[monthData.endDate.getMonth()]
        }-${monthData.endDate.getFullYear()} </span>
            </div>
          </div>
          <p>Received sum of INR Rs.${monthData.monthlyRent} from ${
          monthData.tenantName
        } towards the rent of property located at ${
          monthData.houseAddress
        } for the
          period from ${monthData.startDate} to ${monthData.endDate}
          </p>
          <div class="regard">
              <span>${monthData.ownerName}</span>
              <span>PAN: ${monthData.ownerPAN}</span>
          </div>
        </div>
  `);
      })
      .join('');
  }
  add30Days(initialDate) {
    var finalDate = new Date(initialDate);
    finalDate.setDate(finalDate.getDate() + 30);

    return finalDate;
  }
  addMultipleReciepts(userInfo) {
    var nextMonth = this.add30Days(userInfo.startDate);
    if (userInfo.startDate < userInfo.endDate) {
      this.monthsData.push({...userInfo, endDate: nextMonth});
      this.addMultipleReciepts({...userInfo, startDate: nextMonth});
    }
  }
}
