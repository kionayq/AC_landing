import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "fontFamily": "'Open Sans', 'Ghla', sans-serif"
    },
    "appsLand-btn i": {
        "marginRight": 0,
        "marginLeft": 5
    },
    "section-titlestyle-gradient  span": {
        "direction": "ltr"
    },
    "pull-left": {
        "float": "right !important"
    },
    "pull-right": {
        "float": "left !important"
    },
    "option-template-menu": {
        "left": -250,
        "right": "auto",
        "boxShadow": "2px 1px 4px rgba(2, 3, 3, 0.15)"
    },
    "option-template-menuactive": {
        "right": "auto",
        "left": 0
    },
    "option-template-menu option-template-menu-open": {
        "right": -40,
        "left": "auto",
        "WebkitBorderRadius": "0 5px 5px 0",
        "MozBorderRadius": "0 5px 5px 0",
        "borderRadius": "0 5px 5px 0",
        "boxShadow": "2px 1px 4px rgba(2, 3, 3, 0.15)"
    },
    "scrollToTop i": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "app-links navbar-nav": {
        "float": "left !important"
    },
    "appsLand-navbar dropdown-menu:before": {
        "right": "auto",
        "left": 20
    },
    "appsLand-navbar dropdown-menu a": {
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 0
    },
    "appsLand-navbar menu-toggle": {
        "float": "left"
    },
    "appsLand-navbar mobile-dropdown-menu > span:after": {
        "right": "auto",
        "left": 20
    },
    "appsLand-navbar navbar-nav > li > a": {
        "fontWeight": "300"
    },
    "appsLand-navbar navbar-nav > li > span": {
        "fontWeight": "300"
    },
    "headerappsLand-header header-content site-intro-content header-links": {
        "marginRight": -10,
        "marginLeft": 0
    },
    "inner-header header-content header-links li": {
        "paddingLeft": 0,
        "marginLeft": 0,
        "paddingRight": 15,
        "marginRight": 15
    },
    "inner-header header-content header-links li:before": {
        "right": -4,
        "left": "auto"
    },
    "headerappsLand-headercustom-shape-1 app-overlay:after": {
        "transform": "skewY(12deg)",
        "transformOrigin": "top right"
    },
    "mini-feature__style-2 mini-feature-box icon-box": {
        "float": "right"
    },
    "mini-feature__style-2 mini-feature-box icon-box img:nth-child(2)": {
        "left": "auto",
        "right": 25
    },
    "mini-feature__style-2 mini-feature-box data-box": {
        "float": "right",
        "paddingLeft": 0,
        "paddingRight": 25
    },
    "mini-feature__style-2 mini-feature-box:hover icon-box img:nth-child(2)": {
        "top": "calc(100% - 90px)",
        "right": "calc(100% - 90px)",
        "left": "auto",
        "WebkitTransform": "rotate(45deg) scale(1.5)",
        "MozTransform": "rotate(45deg) scale(1.5)",
        "OTransform": "rotate(45deg) scale(1.5)",
        "MsTransform": "rotate(45deg) scale(1.5)",
        "transform": "rotate(45deg) scale(1.5)"
    },
    "features__style-2 feat-tabs li a i": {
        "marginTop": 0,
        "marginLeft": 10
    },
    "pricing pricing-tables pricing-feature li > span:first-child": {
        "float": "right"
    },
    "pricing pricing-tables pricing-feature li > span:last-child": {
        "float": "left"
    },
    "testimonials testimonials-template testimonials-slide col-left": {
        "borderRight": 0,
        "borderLeft": "1px solid #EEE"
    },
    "testimonials testimonials-template testimonials-slide col-right": {
        "boxShadow": "1px 0px 0px #EEE"
    },
    "table-row > [class*=\"col-\"]:first-child": {
        "paddingLeft": "45px !important",
        "paddingRight": "0 !important"
    },
    "table-row > [class*=\"col-\"]:last-child": {
        "paddingRight": "45px !important",
        "paddingLeft": "0 !important"
    },
    "testimonials testimonials-template testimonials-slide:before": {
        "left": 50,
        "right": "auto"
    },
    "statistics stats": {
        "paddingRight": 75,
        "paddingLeft": 0
    },
    "statistics stats stats-icon": {
        "left": "auto",
        "right": 0
    },
    "team pclient-career": {
        "marginBottom": 0
    },
    "faq questions-container panel-heading a": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 40
    },
    "faq questions-container panel-heading a:after": {
        "left": 20,
        "right": "auto"
    },
    "blog normal-post entry-content entry-post-info posted-on": {
        "right": "auto",
        "left": 25
    },
    "search-form search-input-group form-control": {
        "paddingTop": 6,
        "paddingRight": 25,
        "paddingBottom": 6,
        "paddingLeft": 50
    },
    "search-form search-btn": {
        "float": "left",
        "marginTop": 7,
        "marginRight": 0,
        "marginBottom": 7,
        "marginLeft": 7
    },
    "categories a span": {
        "float": "left"
    },
    "popular-posts post-image": {
        "float": "right"
    },
    "popular-posts post-data": {
        "float": "right",
        "paddingLeft": 0,
        "paddingRight": 15
    },
    "blog list-post entry-header": {
        "float": "right"
    },
    "blog list-post entry-content-footer": {
        "float": "right"
    },
    "blog list-post entry-content entry-post-info posted-on": {
        "right": -84,
        "left": 0
    },
    "single-post entry-Categories li": {
        "paddingLeft": 0,
        "marginLeft": 0,
        "paddingRight": 15,
        "marginRight": 15
    },
    "single-post entry-Categories li:first-child": {
        "paddingRight": 0,
        "marginRight": 0
    },
    "single-post entry-Categories li:before": {
        "right": -4,
        "left": "auto"
    },
    "single-post entry-content p": {
        "color": "#555"
    },
    "single-post entry-footer post-footer-data comment-share > li:first-child": {
        "paddingRight": 0,
        "marginRight": 0,
        "paddingLeft": 15,
        "marginLeft": 5,
        "borderLeft": "1px solid #BBB",
        "borderRight": 0
    },
    "single-post entry-footer post-comments user-photo": {
        "float": "right"
    },
    "single-post entry-footer post-comments the-comment": {
        "float": "right",
        "marginLeft": 0,
        "marginRight": 30
    },
    "single-post entry-footer post-comments the-comment comment-box:before": {
        "border": "10px solid #EEE",
        "borderBottomColor": "transparent",
        "borderRightColor": "transparent",
        "position": "absolute",
        "right": -20,
        "left": 0
    },
    "single-post entry-footer post-comments the-comment comment-header comment-replay": {
        "left": 0,
        "right": "auto"
    },
    "custom-input-group form-control": {
        "paddingLeft": 155,
        "paddingRight": 35
    },
    "custom-input-group subscribe-btn": {
        "float": "left"
    }
});