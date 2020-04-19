Core.App.Ready( function() {
    $('div.MessageBox a[href*="NotVerifiedPackages"').each( function() {
        ThisAction = document.URL;
        if ( ThisAction.match(/=Admin/) ) {
            return;
        }

        $(this).closest('div').remove();
    });
});
