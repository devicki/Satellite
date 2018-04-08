let tabs = $("[id*='tabs-']");
let links = $('#tabs a');
let counter = $('.counter')

tabs.hide();
tabs[0].style.display = "block";

links.click(function (e) {
    let target = e.target;
    let targetIdText = target.attributes.href.textContent;


    tabs.each(function (i) {
        if (targetIdText === tabs[i].attributes.id.value) {
            $(this).slideDown(600);

            let counterText = targetIdText.split('')
            counterNumber = counterText[counterText.length - 1];
            counter.text('0' + counterNumber);

        } else {
            $(this).hide(600);
        }
    });
})

