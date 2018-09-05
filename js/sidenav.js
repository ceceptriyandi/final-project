var myFullpage = new fullpage('#fullpage', {
            verticalCentered: false,
        //to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
            css3:false
        });

        // ---------- OPEN THE MENU FROM LEFT ---------- //
        function openNav_kiri() {
            document.getElementById("mySidenav_kiri").style.width = "75%";
        }

        function closeNav_kiri() {
            document.getElementById("mySidenav_kiri").style.width = "0";
        }

        // ---------- OPEN THE MENU FROM TOP ---------- //
        function openNav_atas() {
            document.getElementById("myNav").style.height = "100%";
        }

        function closeNav_atas() {
            document.getElementById("myNav").style.height = "0%";
        }

        // ---------- OPEN THE MENU FROM RIGHT ---------- //
        function openNav_kanan() {
            document.getElementById("mySidenav_kanan").style.width = "75%";
        }

        function closeNav_kanan() {
            document.getElementById("mySidenav_kanan").style.width = "0";
        }

        // ---------- OPEN THE MENU FROM RIGHT - SECTION 4 ---------- //
        function openNav_kanan1() {
            document.getElementById("mySidenav_kanan1").style.width = "75%";
        }

        function closeNav_kanan1() {
            document.getElementById("mySidenav_kanan1").style.width = "0";
        }
        
        // ---------- OPEN THE MENU FROM BOTTOM ---------- //
        function openNav_bawah() {
            document.getElementById("myNav_bawah").style.height = "100%";
        }
        function closeNav_bawah() {
            document.getElementById("myNav_bawah").style.height = "0%";
        }