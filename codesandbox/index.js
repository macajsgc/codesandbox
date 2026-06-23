async function consultarMercado() {
  try {
    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=pax-gold&vs_currencies=usd';
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    const precioOro = datos['pax-gold'].usd;
    
    console.log("=========================================");
    console.log(`[TESORERÍA] Conexión con el feed exitosa.`);
    console.log(`Precio del Oro actual: $${precioOro} USD`);
    console.log("=========================================");
  } catch (error) {
    console.error("[ERROR] Falla en el feed de precios:", error);
  }
}

consultarMercado();
