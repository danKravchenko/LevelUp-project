
$(function () {
    $('.show-info').click(function () {
        $(this).each(function () {
            if ($(this).prop('id') == 1) {
                if ($(this).val() == false) {
                    let newBlock = $('<div class="open-block"></div>')
                        .append("<p>Traffic permits are a requirement for conducting professional traffic.</p>")
                    $(this).parent().after(newBlock)
                    $(this).val(true)
                    $(this).attr("src", "Images/Rectangle 14.png")
                }

                else {
                    $(this).parent().next().remove()
                    $(this).val(false)
                    $(this).attr("src", "Images/plus.png");
                }
            }

            if ($(this).prop('id') == 2) {
                if ($(this).val() == false) {
                    let newBlock = $('<div class="open-block"></div>')
                        .append("<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>")
                    $(this).parent().after(newBlock)
                    $(this).val(true)
                    $(this).attr("src", "Images/Rectangle 14.png")
                }

                else {
                    $(this).parent().next().remove()
                    $(this).val(false)
                    $(this).attr("src", "Images/plus.png");
                }
            }

            if ($(this).prop('id') == 3) {
                if ($(this).val() == false) {
                    let newBlock = $('<div class="open-block"></div>')
                        .append("<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>")
                    $(this).parent().after(newBlock)
                    $(this).val(true)
                    $(this).attr("src", "Images/Rectangle 14.png")
                }

                else {
                    $(this).parent().next().remove()
                    $(this).val(false)
                    $(this).attr("src", "Images/plus.png");
                }
            }

            if ($(this).prop('id') == 4) {
                if ($(this).val() == false) {
                    let newBlock = $('<div class="open-block"></div>')
                        .append("<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>")
                    $(this).parent().after(newBlock)
                    $(this).val(true)
                    $(this).attr("src", "Images/Rectangle 14.png")
                }

                else {
                    $(this).parent().next().remove()
                    $(this).val(false)
                    $(this).attr("src", "Images/plus.png");
                }
            }

            if ($(this).prop('id') == 5) {
                if ($(this).val() == false) {
                    let newBlock = $('<div class="open-block"></div>')
                        .append("<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>")
                    $(this).parent().after(newBlock)
                    $(this).val(true)
                    $(this).attr("src", "Images/Rectangle 14.png")
                }

                else {
                    $(this).parent().next().remove()
                    $(this).val(false)
                    $(this).attr("src", "Images/plus.png");
                }
            }

            if ($(this).prop('id') == 6) {
                if ($(this).val() == false) {
                    let newBlock = $('<div class="open-block"></div>')
                        .append("<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>")
                    $(this).parent().after(newBlock)
                    $(this).val(true)
                    $(this).attr("src", "Images/Rectangle 14.png")
                }

                else {
                    $(this).parent().next().remove()
                    $(this).val(false)
                    $(this).attr("src", "Images/plus.png");
                }
            }

            if ($(this).prop('id') == 7) {
                if ($(this).val() == false) {
                    let newBlock = $('<div class="open-block"></div>')
                        .append("<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>")
                    $(this).parent().after(newBlock)
                    $(this).val(true)
                    $(this).attr("src", "Images/Rectangle 14.png")
                }

                else {
                    $(this).parent().next().remove()
                    $(this).val(false)
                    $(this).attr("src", "Images/plus.png");
                }
            }

            if ($(this).prop('id') == 8) {
                if ($(this).val() == false) {
                    let newBlock = $('<div class="open-block"></div>')
                        .append("<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>")
                    $(this).parent().after(newBlock)
                    $(this).val(true)
                    $(this).attr("src", "Images/Rectangle 14.png")
                }

                else {
                    $(this).parent().next().remove()
                    $(this).val(false)
                    $(this).attr("src", "Images/plus.png");
                }
            }

            if ($(this).prop('id') == 9) {
                if ($(this).val() == false) {
                    let newBlock = $('<div class="open-block"></div>')
                        .append("<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>")
                    $(this).parent().after(newBlock)
                    $(this).val(true)
                    $(this).attr("src", "Images/Rectangle 14.png")
                }

                else {
                    $(this).parent().next().remove()
                    $(this).val(false)
                    $(this).attr("src", "Images/plus.png");
                }
            }

            if ($(this).prop('id') == 10) {
                if ($(this).val() == false) {
                    let newBlock = $('<div class="open-block"></div>')
                        .append("<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>")
                    $(this).parent().after(newBlock)
                    $(this).val(true)
                    $(this).attr("src", "Images/Rectangle 14.png")
                }

                else {
                    $(this).parent().next().remove()
                    $(this).val(false)
                    $(this).attr("src", "Images/plus.png");
                }
            }

       
        })
    })
})