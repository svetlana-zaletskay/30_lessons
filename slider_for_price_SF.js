var $minCost = $('input#minCost');
var $maxCost = $('input#maxCost');
var $priceSlider = $('#priceSlider');
var $handles;
$priceSlider.slider({
    min: pricesRange.minPrice,
    max: pricesRange.maxPrice,
    orientation: 'horizontal',
    step: 1,
    create: function () {
        $handles = $priceSlider.find(".ui-slider-handle");
        setHandleValues([
            getLeftValue(filters.priceRange, pricesRange),
            getRightValue(filters.priceRange, pricesRange)
        ]);
        initHandlesEventHandlers();
    },
    slide: function (event, ui) {
        $minCost.val(ui.values[0]);
        $maxCost.val(ui.values[1]);
        setHandleValues(ui.values);
        $handles.off();
    },
    stop: function () {
        var noPriceRange = !$this.options.pricesRange;
        // // create event works inproperly - fired in each update
        // setHandleValues([pricesRange.minPrice, pricesRange.maxPrice]);
        function setHandleValues(values) {
            $priceSlider.find(".ui-slider-handle").first()
                .html("<span class='js-handle-value'>" + values[0] + "</span>");
            $priceSlider.find(".ui-slider-handle").last()
                .html("<span class='js-handle-value'>" + values[1] + "</span>");
            $handles.first().html("<span id='minHandleValue' class='js-handle-value hidden'>" + values[0] + "</span>");
            $handles.last().html("<span id='maxHandleValue' class='js-handle-value hidden'>" + values[1] + "</span>");
        }

        function initHandlesEventHandlers() {
            if (!initial) return;

            $handles
                .on("mouseover", function () {
                    $(this).find("span").removeClass("hidden");
                })
                .on("mouseleave", function () {
                    $(this).find("span").addClass("hidden");
                });
        }
    };
