//pridat graf k bodu zvratu

function vypoctyBoduZvratu(){
    //let mnozstvi = parseFloat(document.elementToValue("mnozstvi"));
    //let cenaProduktu = parseFloat(document.elementToValue("cenaProduktu"));
    //let fixniNaklady = parseFloat(document.elementToValue("fixniNaklady"));
    //let variabilniNaklady = parseFloat(document.elementToValue("variabilniNaklady"));
    //let bodZvratu = parseFloat(document.elementToValue("bodZvratu"));

    //let mnozstvi = parseFloat(document.getElementById('mnozstvi').value);
    let cenaProduktu = parseFloat(document.getElementById('cenaProduktu').value);
    let variabilniNaklady= parseFloat(document.getElementById('variabilniNaklady').value);
    let fixniNaklady = parseFloat(document.getElementById('fixniNaklady').value);
    let mnozstvi = fixniNaklady / (cenaProduktu - variabilniNaklady);

    document.getElementById("mnozstvi").value = mnozstvi;
}
document.getElementById("mnozstvi").addEventListener("input", vypoctyBoduZvratu);
document.getElementById("fixniNaklady").addEventListener("input", vypoctyBoduZvratu);
document.getElementById("variabilniNaklady").addEventListener("input", vypoctyBoduZvratu);
document.getElementById("cenaProduktu").addEventListener("input",vypoctyBoduZvratu);

    




