class Receipt {
  constructor(data) {
    this.userData = data;
    this.node = document.createElement('div');
    this.node.classList.add('receipt-container');
    this.monthsData = [];

    this.multipleMonths = this.addMultipleReciepts(this.userData);

    this.monthName = {
      1: 'Jan',
      2: 'Feb',
      3: 'Mar',
      4: 'Apr',
      5: 'May',
      6: 'June',
      7: 'July',
      8: 'Aug',
      9: 'Sep',
      10: 'Oct',
      11: 'Nov',
      12: 'Dec',
    };
    this.node.innerHTML = `<button class="print-btn">Print</button>`;
    this.node.innerHTML += this.monthsData
      .map((monthData, i) => {
        return `
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
              <span class="side-bar">Date: ${monthData.endDate.getDate()} ${
          this.monthName[monthData.endDate.getMonth()]
        } ${monthData.endDate.getFullYear()} </span>
            </div>
          </div>
          <p>Received sum of INR Rs.${monthData.monthlyRent} from ${
          monthData.tenantName
        } towards the rent of property located at ${
          monthData.houseAddress
        } for the
          period from ${monthData.startDate.getDate()} ${
          this.monthName[monthData.startDate.getMonth()]
        } ${monthData.startDate.getFullYear()} to ${monthData.endDate.getDate()} ${
          this.monthName[monthData.endDate.getMonth()]
        } ${monthData.endDate.getFullYear()}
          </p>
          <div class="regard">
              <span>${monthData.ownerName}</span>
              <span>PAN: ${monthData.ownerPAN}</span>
          </div>
        </div>
  `;
      })
      .join('');

    this.node.addEventListener('click', function(e) {
      if (e.target.className !== 'print-btn') return;
      window.print();
    });
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
