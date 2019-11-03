        function validateContactForm() {
            var valid = true;

            $(".info").html("");
            $(".input-field").css('border', '#e0dfdf 1px solid');
            var userName = $("#userName").val();
            var userEmail = $("#userEmail").val();
            var subject = $("#subject").val();
            var content = $("#content").val();
            
            if (userName == "") {
                $("#userName-info").html("");
                $("#userName").css('border', '#e66262 1px solid');
                valid = false;
            }
            if (userEmail == "") {
                $("#userEmail-info").html("");
                $("#userEmail").css('border', '#e66262 1px solid');
                valid = false;
            }
            if (!userEmail.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/))
            {
                $("#userEmail-info").html("");
                $("#userEmail").css('border', '#e66262 1px solid');
                valid = false;
            }

            if (subject == "") {
                $("#subject-info").html("");
                $("#subject").css('border', '#e66262 1px solid');
                valid = false;
            }
            if (!subject.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/))
            {
                $("#subject-info").html("");
                $("#subject").css('border', '#e66262 1px solid');
                valid = false;
            }
            if (content == "") {
                $("#userMessage-info").html("");
                $("#content").css('border', '#e66262 1px solid');
                valid = false;
            }
            return valid;
        }