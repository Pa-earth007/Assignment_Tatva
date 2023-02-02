    $(document).ready(function () {
        $("#menubaraction").click(function () {
            $('.lm').toggleClass('decreasewidth',0);
            $(".hide").toggleClass('disappear');
        });
        $("#menubaraction1").click(function () {
            $(".lm1").toggleClass('disappear');
        });
        // $("#validdata").blur(function () {
        //     if($("#lname").val("123456")){
        //         $(".minifont-danger").css("display","none")
        //     }
        //     else{
        //         $(".minifont-danger").css("display","block")
        //     }
        // });
        $("#tab1").click(function () {
            $('#tab1').addClass('active-report');
            $('#tab2').removeClass('active-report');
            $('#tab3').removeClass('active-report');
        });
        $("#tab2").click(function () {
            $('#tab2').toggleClass('active-report');
            $('#tab1').removeClass('active-report');
            $('#tab3').removeClass('active-report');
        });
        $("#tab3").click(function () {
            $('#tab3').toggleClass('active-report');
            $('#tab2').removeClass('active-report');
            $('#tab1').removeClass('active-report');
        });
        $("#weekly").click(function () {
            $('#weekly').addClass('active-report');
            $('#monthly').removeClass('active-report');
            $('#yearly').removeClass('active-report');
        });
        $("#monthly").click(function () {
            $('#monthly').toggleClass('active-report');
            $('#weekly').removeClass('active-report');
            $('#yearly').removeClass('active-report');
        });
        $("#yearly").click(function () {
            $('#yearly').toggleClass('active-report');
            $('#weekly').removeClass('active-report');
            $('#monthly').removeClass('active-report');
        });
    });