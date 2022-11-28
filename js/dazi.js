var index = 0;
        var word = document.getElementById("w").innerHTML;
        function type() {
            document.getElementById("aa").innerText = word.substring(0, index++);
        }
        setInterval(type, 280);