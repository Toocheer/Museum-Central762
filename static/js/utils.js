function stickSidebar() {
  Zepto(($) => {
    if (document.body.clientWidth >= 980) {
      $('#foot').stickUp()
    }
    $(window).resize(function () {
      if (document.body.clientWidth >= 980) {
        $('#foot').stickUp()
        $('#foot').addClass('stuckMenu')
        $('#foot').addClass('isStuck')
        if (vartop < varscroll) {
          $('#foot').css({ position: 'fixed', top: '0px;' })
        }
      } else {
        $('#foot').removeClass('stuckMenu')
        $('#foot').removeClass('isStuck')
        $('#foot').css({ position: '', top: '' })
      }
    })
  })
}

function getLinkArgs() {
  var reg = new RegExp('(^|&)([^&]*)(&|$)')
  var r = window.location.search.substr(1).match(reg) //search,查询？后面的参数，并匹配正则
  if (r != null) return unescape(r[2])
  return null
}

let currentArti = getLinkArgs()

function renderMarkdown(type, linkArg) {
  axios
    .get('../docs/' + type + '/' + linkArg + '/' + linkArg + '.md')
    .then((response) => {
      var Convertor = new showdown.Converter()
      $('#markdown').html(Convertor.makeHtml(response.data))
      $('#author').removeClass('d-none')
    })
    .catch((error) => {
      $('#NotFound').removeClass('d-none')
      $('#NotFound').addClass('d-flex')
    })
}

