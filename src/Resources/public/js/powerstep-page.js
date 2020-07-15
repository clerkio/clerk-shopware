window.onload = function() {
        var page = $("#clerk-powerstep");
        var buyWidget = $(".buy-widget");
        var pageContent = $(".content-main > .container");
        var CMSPageContent = $(".content-main > .container-main");

        buyWidget.submit(function(e) {
            e.stopPropagation();
            var product_Id = e.target.querySelector('input[name=product-id]').value;
            if (e.target.querySelector('input[name=product-parentId]').value !== "") {
                product_Id = e.target.querySelector('input[name=product-parentId]').value;
            }
            var product_name = e.target.querySelector('input[name=product-name').value;
            var product_category = e.target.querySelector('input[name=product-category').value;
            var clerk_powerstep_header = $('#clerk_powerstep_header_h2');
            var product_image = '';

            if (e.target.querySelector('input[name=product-image') !== null) {
                product_image = e.target.querySelector('input[name=product-image').value;
            }

            var clerk_powerstep_image = $('#clerk_powerstep_image_img');
            clerk_powerstep_header.text(product_name+' added to cart');
            clerk_powerstep_image.attr("src", product_image);
            clerk_powerstep_image.attr("alt", product_name);

            $('.clerk-powerstep-recommendation').each(function( index ) {
                $(this).attr('data-products','["'+product_Id+'"]');
                $(this).attr('data-category', product_category);
                Clerk('content','#clerk-powerstep-'+ $(this).data('template').replace('@',''));
            });
            pageContent.each(function( index ) {
                $(this).hide();
            });
            CMSPageContent.each(function( index ) {
                $(this).hide();
            });

            page.css("display","contents");
            $(".offcanvas").toggle();
            setTimeout(function(){
                $(".modal-backdrop").toggle();
                $('html').removeClass('no-scroll');
            }, 100);


        });

        $(".clerk_powerstep_close").click(function () {
            page.hide();
            pageContent.each(function( index ) {
                $(this).css("display","block");
            });
            CMSPageContent.each(function( index ) {
                $(this).css("display","block");
            });
        });
    }
