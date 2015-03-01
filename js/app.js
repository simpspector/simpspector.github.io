String.prototype.repeat = function( num ) {
    return new Array(num + 1).join(this);
}

$(document).ready(function() {
    var idCounter = 1;
    var $ul       = $('.toc ul');

    $('h2,h3').each(function() {
        var id = "toc_entry_" + idCounter;
        var indent = (this.tagName == 'H2') ? 0 : 1;

        $(this).attr('id', id);

        var $li = $('<li><a href="#' + id + '">' + '&nbsp;'.repeat(indent * 4) + $(this).html() + '</a></li>');
        $ul.append($li);

        idCounter++;
    });
});
