function switchChannel(channelName) {
    document.getElementById('channel-name').innerHTML = channelName;

    document.getElementById('channel-location').innerHTML = 'by <a href="http://w3w.co/upgrading.never.helps" target="_blank"><strong>upgrading.never.helps</strong></a>';

    $('#channel-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');

    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channelName + ')').addClass('selected');
}

function star() {
    $('#channel-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star.png');
}

function selectTab(Id) {

    $('#tab-bar button').removeClass('selected');
    $(Id).addClass('selected');
}

function toggleEmojis() {
    $('#emojis').toggle();
}
