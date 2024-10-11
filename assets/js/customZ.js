var AnanyooJS = {
    addButtonRole: function(parentSelector) {            
        setTimeout(function() {                	
                jQuery(parentSelector + " .slick-prev span.carousel-tooltip").attr({
                    "role": "status",
                    "aria-live":"polite"
                });
                jQuery(parentSelector + " .slick-next span.carousel-tooltip").attr({
                    "role": "status",
                    "aria-live":"polite"
                });
                jQuery(parentSelector + " .slick-dots li span.carousel-tooltip").attr({
                    "role": "status",
                    "aria-live":"polite"
                });
            
            
            }, 3000);           
    },
    addTitleInYTVideo: function() {
        jQuery("#player-7da892a1-cd80-41ce-92ae-7f2129286a37").attr({
            "title": "Youtube Video"
        });
    },
    replacePByH2: function(selectedClass) {
        var pData = jQuery(selectedClass).html();
        jQuery(selectedClass).replaceWith("<h2>" + pData + "</h2>");
    },
    addPasHeading: function(selectedClass) {
        console.log('selectedClass --', selectedClass);
        var pData = jQuery(selectedClass).html();
        jQuery(selectedClass).replaceWith("<button aria-label='Section Redirection Link'>" + pData + "</button>"); 
    },
    removeTitleFromImg: function() {
        jQuery(".product .card .card-img-container img").each(function() {
            var imgAltData = jQuery(this).attr('alt');
            var imgTitleData = jQuery(this).attr('title');
            if(imgAltData == imgTitleData) {
                jQuery(this).attr('title', "");
            } 
        });
    },
    removeTitleFromHeaderSliderImg: function() {
        setTimeout(function() { 
            jQuery(".heroCarousel .slick-list .slick-track a").each(function() {
                var imgAltData = jQuery(this).find(".heroCarousel-slide .heroCarousel-image-wrapper img").attr('alt');
                var imgTitleData = jQuery(this).find(".heroCarousel-slide .heroCarousel-image-wrapper img").attr('title');

                console.log('imgAltData --', imgAltData);
                console.log('imgTitleData --', imgTitleData);


                if(imgAltData == imgTitleData) {
                    jQuery(this).find(".heroCarousel-image-wrapper img").attr('title', "");
                } 
            });
        }, 3000); 
    },
    removeTitleFromLogoImg: function() {
        var imgAltData = jQuery(".header-logo-image-container .header-logo-image").attr('alt');
        var imgTitleData = jQuery(".header-logo-image-container .header-logo-image").attr('title');
        if(imgAltData == imgTitleData) {
            jQuery(".header-logo-image-container .header-logo-image").attr('title', "");
        } 
    },
    removeTitleFromImgProductDetails: function() {
        jQuery(".productView-thumbnails .productView-thumbnail").each(function() {
            var imgAltData = jQuery(this).find(".productView-thumbnail-link img").attr('alt');
            var imgTitleData = jQuery(this).find(".productView-thumbnail-link img").attr('title');
            if(imgAltData == imgTitleData) {
                jQuery(this).find(".productView-thumbnail-link img").attr('title', "");
                jQuery(this).find(".productView-thumbnail-link img").attr('alt', "");
            } 
        });
    },
    removeTitleFromImgRelatedProducts: function() {
        setTimeout(function() {  
            jQuery(".productCarousel .slick-list .productCarousel-slide").each(function() {
                var imgAltData = jQuery(this).find(".card-figure .card-img-container img").attr('alt');
                var imgTitleData = jQuery(this).find(".card-figure .card-img-container img").attr('title');

                // console.log('imgAltData --', imgAltData);
                // console.log('imgTitleData --', imgTitleData);

                if(imgAltData == imgTitleData) {
                    jQuery(this).find(".card-figure .card-img-container img").attr('title', "");
                } 
            });
            }, 3000);  
    },
    removeHrefFromSubmenuHeading: function() {
        jQuery(".navPages-list .navPages-item").each(function() {
            jQuery(this).find(".has-subMenu").attr("href", "");
        });
    },
    removeLogoTitleValue: function() {
        jQuery(".header-logo-image").attr("title", "");
    },
    removeTitleFromBlogList: function() {
        jQuery(".blog").each(function() {
            jQuery(this).find(".blog-post-figure .blog-thumbnail a img").attr("title", "");
        });
    },
    removeTitleFormCartList: function() {
        jQuery(".cart-list .cart-item").each(function() { 
        jQuery(this).find(".cart-item-figure img").attr("title", "");
        }); 
    },
        replaceH3ByH2: function(selectedClass) {
        var h2Data = jQuery(selectedClass).html();
        jQuery(selectedClass).replaceWith("<h2>" + h2Data + "</h2>");
    },
    modifyAltTextInProductDetailsThumbImage: function() {
        jQuery(".productView-thumbnails .productView-thumbnail").each(function() {
            var imageAltData = jQuery(this).find(".productView-thumbnail-link img").attr("alt");
            jQuery(this).find(".productView-thumbnail-link img").attr("alt", "Thumbnail: " + imageAltData );
        });  
        
    },
    removeImageAltTextFromCheckoutPage: function() {
        setTimeout(function() {
            jQuery(".optimizedCheckout-orderSummary .optimizedCheckout-orderSummary-cartSection .productList .productList-item").each(function(){
                jQuery(this).find(".product img").attr("alt", "");
            });


            jQuery(".checkout-view-content .checkout-form fieldset").each(function() {
                var fieldName = jQuery(this).find(".form-body .form-field input").attr("name");
                if(fieldName == "orderComment") {
                    jQuery(this).find(".form-body .form-field input").attr("id", fieldName);
                }
            });

            jQuery("#checkoutShippingAddress .checkout-address .dynamic-form-field").each(function() {
                var fieldName = jQuery(this).find(".form-field .optimizedCheckout-form-label").html();
                console.log('fieldName --', fieldName);
            });

            //==== First Name Start ==== //
            
            jQuery(".dynamic-form-field--firstName .form-field input").attr("aria-labelledby", "");
            jQuery(".dynamic-form-field--firstName .form-field .optimizedCheckout-form-label").html();
            jQuery(".dynamic-form-field--firstName .form-field input").attr("aria-labelledby",  jQuery(".dynamic-form-field--firstName .form-field .optimizedCheckout-form-label").attr("id"));

            jQuery( '<div class="is-srOnly" id="' + jQuery(".dynamic-form-field--firstName .form-field .optimizedCheckout-form-label").attr("id") +'"> ' + jQuery(".dynamic-form-field--firstName .form-field .optimizedCheckout-form-label").html() + ' </div>' ).insertAfter( ".dynamic-form-field--firstName .form-field .optimizedCheckout-form-label" );
            jQuery(".dynamic-form-field--firstName .form-field .optimizedCheckout-form-label").attr("id", "");

            //==== First Name End ==== //

            //==== Last Name Start ==== //
            
            jQuery(".dynamic-form-field--lastName .form-field input").attr("aria-labelledby", "");
            jQuery(".dynamic-form-field--lastName .form-field .optimizedCheckout-form-label").html();
            jQuery(".dynamic-form-field--lastName .form-field input").attr("aria-labelledby",  jQuery(".dynamic-form-field--lastName .form-field .optimizedCheckout-form-label").attr("id"));

            jQuery( '<div class="is-srOnly" id="' + jQuery(".dynamic-form-field--lastName .form-field .optimizedCheckout-form-label").attr("id") +'"> ' + jQuery(".dynamic-form-field--lastName .form-field .optimizedCheckout-form-label").html() + ' </div>' ).insertAfter( ".dynamic-form-field--lastName .form-field .optimizedCheckout-form-label" );
            jQuery(".dynamic-form-field--lastName .form-field .optimizedCheckout-form-label").attr("id", "");

            //==== Last Name End ==== //

            //==== Company Name Start ==== //
            
            jQuery(".dynamic-form-field--company .form-field input").attr("aria-labelledby", "");
            jQuery(".dynamic-form-field--company .form-field .optimizedCheckout-form-label").html();
            jQuery(".dynamic-form-field--company .form-field input").attr("aria-labelledby",  jQuery(".dynamic-form-field--company .form-field .optimizedCheckout-form-label").attr("id"));

            jQuery( '<div class="is-srOnly" id="' + jQuery(".dynamic-form-field--company .form-field .optimizedCheckout-form-label").attr("id") +'"> ' + jQuery(".dynamic-form-field--company .form-field .optimizedCheckout-form-label").html() + ' </div>' ).insertAfter( ".dynamic-form-field--company .form-field .optimizedCheckout-form-label" );
            jQuery(".dynamic-form-field--company .form-field .optimizedCheckout-form-label").attr("id", "");

            //==== Company Name End ==== //

            //==== Phone Number Start ==== //
            
            jQuery(".dynamic-form-field--phone .form-field input").attr("aria-labelledby", "");
            jQuery(".dynamic-form-field--phone .form-field .optimizedCheckout-form-label").html();
            jQuery(".dynamic-form-field--phone .form-field input").attr("aria-labelledby",  jQuery(".dynamic-form-field--phone .form-field .optimizedCheckout-form-label").attr("id"));

            jQuery( '<div class="is-srOnly" id="' + jQuery(".dynamic-form-field--phone .form-field .optimizedCheckout-form-label").attr("id") +'"> ' + jQuery(".dynamic-form-field--phone .form-field .optimizedCheckout-form-label").html() + ' </div>' ).insertAfter( ".dynamic-form-field--phone .form-field .optimizedCheckout-form-label" );
            jQuery(".dynamic-form-field--phone .form-field .optimizedCheckout-form-label").attr("id", "");

            //==== Phone Number End ==== //

            //==== AddressLine1 Start ==== //
            
            jQuery(".dynamic-form-field--addressLine1 .form-field input").attr("aria-labelledby", "");
            jQuery(".dynamic-form-field--addressLine1 .form-field .optimizedCheckout-form-label").html();
            jQuery(".dynamic-form-field--addressLine1 .form-field input").attr("aria-labelledby",  jQuery(".dynamic-form-field--addressLine1 .form-field .optimizedCheckout-form-label").attr("id"));

            jQuery( '<div class="is-srOnly" id="' + jQuery(".dynamic-form-field--addressLine1 .form-field .optimizedCheckout-form-label").attr("id") +'"> ' + jQuery(".dynamic-form-field--addressLine1 .form-field .optimizedCheckout-form-label").html() + ' </div>' ).insertAfter( ".dynamic-form-field--addressLine1 .form-field .optimizedCheckout-form-label" );
            jQuery(".dynamic-form-field--addressLine1 .form-field .optimizedCheckout-form-label").attr("id", "");

            //==== AddressLine1 End ==== //

            //==== AddressLine2 Start ==== //
            
            jQuery(".dynamic-form-field--addressLine2 .form-field input").attr("aria-labelledby", "");
            jQuery(".dynamic-form-field--addressLine2 .form-field .optimizedCheckout-form-label").html();
            jQuery(".dynamic-form-field--addressLine2 .form-field input").attr("aria-labelledby",  jQuery(".dynamic-form-field--addressLine2 .form-field .optimizedCheckout-form-label").attr("id"));

            jQuery( '<div class="is-srOnly" id="' + jQuery(".dynamic-form-field--addressLine2 .form-field .optimizedCheckout-form-label").attr("id") +'"> ' + jQuery(".dynamic-form-field--addressLine2 .form-field .optimizedCheckout-form-label").html() + ' </div>' ).insertAfter( ".dynamic-form-field--addressLine2 .form-field .optimizedCheckout-form-label" );
            jQuery(".dynamic-form-field--addressLine2 .form-field .optimizedCheckout-form-label").attr("id", "");

            //==== AddressLine2 End ==== //

            //==== City Start ==== //
            
            jQuery(".dynamic-form-field--city .form-field input").attr("aria-labelledby", "");
            jQuery(".dynamic-form-field--city .form-field .optimizedCheckout-form-label").html();
            jQuery(".dynamic-form-field--city .form-field input").attr("aria-labelledby",  jQuery(".dynamic-form-field--city .form-field .optimizedCheckout-form-label").attr("id"));

            jQuery( '<div class="is-srOnly" id="' + jQuery(".dynamic-form-field--city .form-field .optimizedCheckout-form-label").attr("id") +'"> ' + jQuery(".dynamic-form-field--city .form-field .optimizedCheckout-form-label").html() + ' </div>' ).insertAfter( ".dynamic-form-field--city .form-field .optimizedCheckout-form-label" );
            jQuery(".dynamic-form-field--city .form-field .optimizedCheckout-form-label").attr("id", "");

            //==== City End ==== //

            //==== CountryCode Start ==== //
            
            jQuery(".dynamic-form-field--countryCode .form-field select").attr("aria-labelledby", "");
            jQuery(".dynamic-form-field--countryCode .form-field .optimizedCheckout-form-label").html();
            jQuery(".dynamic-form-field--countryCode .form-field select").attr("aria-labelledby",  jQuery(".dynamic-form-field--countryCode .form-field .optimizedCheckout-form-label").attr("id"));

            jQuery( '<div class="is-srOnly" id="' + jQuery(".dynamic-form-field--countryCode .form-field .optimizedCheckout-form-label").attr("id") +'"> ' + jQuery(".dynamic-form-field--countryCode .form-field .optimizedCheckout-form-label").html() + ' </div>' ).insertAfter( ".dynamic-form-field--countryCode .form-field .optimizedCheckout-form-label" );
            jQuery(".dynamic-form-field--countryCode .form-field .optimizedCheckout-form-label").attr("id", "");

            //==== CountryCode End ==== //

            //==== State Start ==== //
            
            jQuery(".dynamic-form-field--provinceCode .form-field select").attr("aria-labelledby", "");
            jQuery(".dynamic-form-field--provinceCode .form-field .optimizedCheckout-form-label").html();
            jQuery(".dynamic-form-field--provinceCode .form-field select").attr("aria-labelledby",  jQuery(".dynamic-form-field--provinceCode .form-field .optimizedCheckout-form-label").attr("id"));

            jQuery( '<div class="is-srOnly" id="' + jQuery(".dynamic-form-field--provinceCode .form-field .optimizedCheckout-form-label").attr("id") +'"> ' + jQuery(".dynamic-form-field--provinceCode .form-field .optimizedCheckout-form-label").html() + ' </div>' ).insertAfter( ".dynamic-form-field--provinceCode .form-field .optimizedCheckout-form-label" );
            jQuery(".dynamic-form-field--provinceCode .form-field .optimizedCheckout-form-label").attr("id", "");

            //==== State End ==== //

            //==== Postcode Start ==== //
            
            jQuery(".dynamic-form-field--postCode .form-field input").attr("aria-labelledby", "");
            jQuery(".dynamic-form-field--postCode .form-field .optimizedCheckout-form-label").html();
            jQuery(".dynamic-form-field--postCode .form-field input").attr("aria-labelledby",  jQuery(".dynamic-form-field--postCode .form-field .optimizedCheckout-form-label").attr("id"));

            jQuery( '<div class="is-srOnly" id="' + jQuery(".dynamic-form-field--postCode .form-field .optimizedCheckout-form-label").attr("id") +'"> ' + jQuery(".dynamic-form-field--postCode .form-field .optimizedCheckout-form-label").html() + ' </div>' ).insertAfter( ".dynamic-form-field--postCode .form-field .optimizedCheckout-form-label" );
            jQuery(".dynamic-form-field--postCode .form-field .optimizedCheckout-form-label").attr("id", "");

            //==== Postcode End ==== // 
            
            jQuery(".checkout-form fieldset:first-child").prepend('<legend class="is-srOnly form-legend optimizedCheckout-headingSecondary">Checkout Shipping Address</legend>');

        }, 3000);  
    },
    //=== Product slider link in title remove ====//
    removeSliderTitleLInk: function() {
        jQuery("#sd-product-set-carousel-31c7fb83-b4ad-4c2f-96aa-fb4bf55883d3").children().children().each(function() {
            var titleData = jQuery(this).find(".css-1k0woj .css-1clkqco a").html();
            console.log('titleData --', titleData);

        });

        jQuery(".css-1k0woj .css-1clkqco a").html();
    },
    removeTitleFormOrderList: function() {
        jQuery(".account-list .account-listItem").each(function() { 
        jQuery(this).find(".account-product-figure img").attr("title", "");
        }); 
    },
};
jQuery(document).ready(function() {        
    AnanyooJS.addButtonRole(".headerSlider");
    AnanyooJS.addButtonRole(".productCarousel");
    AnanyooJS.addTitleInYTVideo();
    AnanyooJS.replacePByH2(".go2029122802 .go4287151726 p");
    AnanyooJS.replacePByH2(".go3393032375 .go1730199940 p");
    AnanyooJS.replacePByH2(".go2029122802 .content-editable-c2ada288-bc01-4d7e-97b4-88f54aa05558-title p");
    AnanyooJS.addPasHeading(".go3616899523 .go1304574217 p");
    AnanyooJS.removeTitleFromImg();
    AnanyooJS.removeTitleFromLogoImg();
    AnanyooJS.removeTitleFromImgProductDetails();
    AnanyooJS.removeTitleFromImgRelatedProducts();
    AnanyooJS.removeHrefFromSubmenuHeading();
    AnanyooJS.removeLogoTitleValue();
    AnanyooJS.removeTitleFromBlogList();
    AnanyooJS.removeTitleFormCartList();
    AnanyooJS.removeTitleFormOrderList();
    AnanyooJS.replaceH3ByH2(".account-content .account-heading");
    AnanyooJS.modifyAltTextInProductDetailsThumbImage();
    AnanyooJS.removeImageAltTextFromCheckoutPage();
    AnanyooJS.removeTitleFromHeaderSliderImg();
    
});


    
