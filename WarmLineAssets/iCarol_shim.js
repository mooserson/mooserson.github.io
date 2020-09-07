// Global (everybody should be able to pick styles)
//X New call report (everybody) 
//X Chatboard flip / new buttons (everybody)
// Select report type (optional, any WL, could be configured for CH too)
// Call review (coordinators only)

$('head').append('<link rel="stylesheet" type="text/css" href="style.css">');
let new_call_report_url = /(https?): \/\/(na0.icarol.com\/secure\/reports\/ReportView.\.aspx).*(&Action=New).*/;
let chatboards_url = /(https?): \/\/(na0.icarol.com\/secure\/forum.*/;
let current_url = window.location.href

// New Call report JS (check peer services)
if(current_url.match(new_call_report_url)){
  var peer_checkbox = $("[fieldname='Peer Services'] >");

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function peerServicesEnforcer() {
    sleep(1000)
    if (!peer_checkbox.prop('checked')) {
      $("[fieldname='Peer Services'] > ")[0].click();
    }
  }

  peerServicesEnforcer()
  
  // Chatboard JS (sort button)
} else if (current_url.match(chatboards_url)) {
  $('head').append($("<script src='https://kit.fontawesome.com/29c8b6a8a8.js' crossorigin='anonymous'></script>"))

  // add button
  $("#cphBody_pnlThread").append($("<i id='reverseOrderButton' class='fas fa-sort'/></i>"));

  $("#reverseOrderButton").click(function () {
    var tbody = $('#cphBody_tblThread tbody');
    flipTable(tbody);
  });

  function chunkArray(array, size) {
    let result = []
    for (let i = 0; i < array.length; i += size) {
      let chunk = array.slice(i, i + size)
      result.push(chunk)
    }
    return result
  }

  function flipTable(tbody) {
    var posts = $('tr', tbody).get();
    var reverse_posts = chunkArray(posts, 3).reverse().flat();
    tbody.append(reverse_posts);
  }
  // Main contacts (background)
} else if ()

}
