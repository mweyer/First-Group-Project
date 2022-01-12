// the styling stays the same even without this code
// but material documentation says to include it

M.AutoInit();
$(document).ready(function() {
    $('select').formSelect();
});
var instance = M.FormSelect.getInstance(elem);
