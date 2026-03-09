<script>
function addition(){
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;

    let sum = Number(number1) + Number(number2);

    document.getElementById("result").innerHTML = "Result : " + sum;
}
</script>

<div style="text-align: center;">
<form onsubmit="addition(); return false;">
    <h2 style="color: brown;">Addition</h2><br>

    <div>
        <label>Enter number</label>
        <input type="number" id="number1" name="number1"/>
    </div>

    <div>
        <label>Enter number</label>
        <input type="number" id="number2" name="number2"/>
    </div>

    <div>
        <input type="submit" value="Add" style="color: blue;">
    </div>

    <h4 id="result">Result :</h4>
</form>
</div>



