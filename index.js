/*
<h1>Input javar</h1>
    <form action="" method="">
        so thu 1: <input type="number" id="so1" required> <br>
        so thu 2: <input type="number" id="so2"> <br>
        Ket qua: <input type="number" disabled id="result"> <br>
        <button type="button" onclick="Tinhtoan();">Tinh toan</button> <br>
        <span id="messages" style="color: red;"></span>
    </form>
</body>
</html>
<script>
    function Tinhtoan() {
        var a = document.querySelector('#so1').value;
        var b = document.querySelector('#so2').value;
        if (a == ""|| b=="") {
            document.querySelector("#messages").innerHTML = "Please fill a value";
        }
        a = parseFloat(a);
        b = parseFloat(b);
        var c = a+b;
        document.querySelector('#result').value = c
    }


    <h1>Calculator</h1>
    1st Number: <input type="number" id="number1"> <br>
    2nd Number: <input type="number" id="number2"> <br>
    <button type="button" onclick="multiply();">Multiply</button>
    <button type="button" onclick="divide();">Divide</button> <br> <br>
    <span id="result" style="color:red; font-size: 30px;"></span>

    function multiply() {
        var a = document.getElementById('number1').value;
        var b = document.getElementById('number2').value;
            a = parseFloat(a);
            b = parseFloat(b);
            var c = a * b;
            document.getElementById('result').innerHTML = "Result: "  + c
    }
    function divide() {
        var a = document.getElementById('number1').value;
        var b = document.getElementById('number2').value;
            a = parseFloat(a);
            b = parseFloat(b);
            var c = a / b;
            document.getElementById('result').innerHTML = "Result: "  + c
    }
</script>