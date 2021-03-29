navbarHamburger = () => {
    var menuItems = document.getElementById('navbar-menu-items')
    menuItems.style.display = menuItems.style.display === 'none' ? 'flex' : 'none'
}

clipboardFunc = info => {
    var copyText = document.getElementById(info);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    var tooltip = document.getElementById("myTooltip" + info);
    tooltip.innerHTML = "Copied: " + copyText.value;
}

mouseOutClipboardFuc = info => {
    var tooltip = document.getElementById("myTooltip" + info);
    tooltip.innerHTML = "Copy to clipboard";
}

contactMeDetails = () => {
    var detailsPage = document.getElementById('contact-me-details')
    detailsPage.style.display = detailsPage.style.display === 'none' ? 'flex' : 'none'
}