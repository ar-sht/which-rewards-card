function weightedAvg(hotel, airline, weight) {
  return hotel * (1 - weight) + airline * weight
}


document.querySelector('.submit-btn').addEventListener('click', function () {
  const port = document.querySelector('#port').value
  const air = Number(document.querySelector('#air').value)
  const hotel = Number(document.querySelector('#hotel').value)
  const store = Number(document.querySelector('#store').value)
  const dining = Number(document.querySelector('#dining').value)
  const weight = Number(document.querySelector('#use').value)/10

  let ihg = 1
  let hilton = 1
  let hyatt = 1
  let marriott = 1
  let alaska = 1
  let american = 1
  let delta = 1
  let jetblue = 1
  let southwest = 1
  let united = 1

  // TODO Ifs for each supported airport

  if (port === 'atl') {
    alaska = 0.0100
    american = 0.0297
    delta = 0.7282
    jetblue = 0.0100
    southwest = 0.0944
    united = 0.0100
  } else if (port === 'lax') {
    alaska = 0.0862
    american = 0.2032
    delta = 0.1850
    jetblue = 0.0400
    southwest = 0.1558
    united = 0.1490
  } else if (port === 'ord') {
    alaska = 0.0300
    american = 0.2646
    delta = 0.0400
    jetblue = 0.0300
    southwest = 0.0400
    united = 0.3135
  } else if (port === 'dfw') {
    alaska = 0.0100
    american = 0.6806
    delta = 0.0373
    jetblue = 0.0100
    southwest = 0.0100
    united = 0.0100
  } else if (port === 'den') {
    alaska = 0.0200
    american = 0.0200
    delta = 0.0531
    jetblue = 0.0200
    southwest = 0.2852
    united = 0.3150
  } else if (port === 'jfk') {
    alaska = 0.0527
    american = 0.1332
    delta = 0.3316
    jetblue = 0.3633
    southwest = 0.0050
    united = 0.0050
  } else if (port === 'sfo') {
    alaska = 0.1346
    american = 0.0965
    delta = 0.1060
    jetblue = 0.0300
    southwest = 0.0300
    united = 0.4132
  } else if (port === 'sea') {
    alaska = 0.4254
    american = 0.0300
    delta = 0.1953
    jetblue = 0.0300
    southwest = 0.0644
    united = 0.0624
  } else if (port === 'las') {
    alaska = 0.0300
    american = 0.0970
    delta = 0.0970
    jetblue = 0.0300
    southwest = 0.3731
    united = 0.0880
  } else if (port === 'mco') {
    alaska = 0.0400
    american = 0.1301
    delta = 0.1489
    jetblue = 0.1193
    southwest = 0.2483
    united = 0.0400
  } else if (port === 'clt') {
    alaska = 0.0300
    american = 0.5959
    delta = 0.0295
    jetblue = 0.0010
    southwest = 0.0155
    united = 0.0010
  } else if (port === 'ewr') {
    alaska = 0.0200
    american = 0.0688
    delta = 0.0422
    jetblue = 0.0640
    southwest = 0.0200
    united = 0.5120
  } else if (port === 'phx') {
    alaska = 0.0200
    american = 0.3746
    delta = 0.0650
    jetblue = 0.0200
    southwest = 0.3507
    united = 0.0501
  } else if (port === 'mia') {
    alaska = 0.0100
    american = 0.6861
    delta = 0.1162
    jetblue = 0.0100
    southwest = 0.0100
    united = 0.0575
  } else if (port === 'iah') {
    alaska = 0.0300
    american = 0.0620
    delta = 0.0300
    jetblue = 0.0300
    southwest = 0.0300
    united = 0.5089
  } else if (port === 'bos') {
    alaska = 0.0300
    american = 0.1829
    delta = 0.1557
    jetblue = 0.3279
    southwest = 0.0741
    united = 0.1109
  } else if (port === 'msp') {
    alaska = 0.0200
    american = 0.0497
    delta = 0.5355
    jetblue = 0.0200
    southwest = 0.0518
    united = 0.0200
  } else if (port === 'dtw') {
    alaska = 0.0200
    american = 0.0200
    delta = 0.4951
    jetblue = 0.0200
    southwest = 0.0417
    united = 0.0200
  } else if (port === 'fll') {
    alaska = 0.0200
    american = 0.0200
    delta = 0.1313
    jetblue = 0.2150
    southwest = 0.2126
    united = 0.0768
  } else if (port === 'phl') {
    alaska = 0.0200
    american = 0.4432
    delta = 0.0200
    jetblue = 0.0200
    southwest = 0.0748
    united = 0.0200
  }


  function amexPlat(air, hotel, dining, store){
    if (dining <= 23_000) {
      return dining * 10 + (air + hotel) * 5 + store - 695 * 100 + 15_000 + 800 * 100
    } else {
    return (dining - 23_000) + 230_000 + (air + hotel) * 5 + store - 695 * 100 + 15_000 + 800 * 100
    }
  }


  function amexGold(air, hotel, dining, store) {
    if (store <= 25_000) {
      return dining * 4 + store * 4 + air * 3 + hotel - 250 * 100 + 320 * 100
    } else {
    return 100_000 + dining * 4 + (store - 25_000) * 4 + air * 3 + hotel - 250 * 100 + 320 * 100
    }
  }


  function amexGreen(air, hotel, dining, store) {
    return dining * 3 + air * 1.5 + (air + hotel) * 3 + store - 150 * 100 + 200 * 100
  }


  function amexEd(air, hotel, dining, store) {
    if (store <= 6_000) {
      return (dining + store * 2 + air + hotel) * (11 / 10) + 10 * 100
    } else {
    return (12_000 + dining + (store - 6_000) + air + hotel) * (11 / 10) + 10 * 100
    }
  }


  function amexEdp(air, hotel, dining, store) {
    if (store <= 6_000) {
      return (dining + store * 4 + air + hotel) * (12.5 / 10) - 95 * 100 + 80 * 100
    } else {
    return (12_000 + dining + (store - 6_000) + air + hotel + store) * (12.5 / 10) - 95 * 100 + 80 * 100
    }
  }


  function amexBlue(air, hotel, dining, store) {
    return dining + store * 1.5 + air + hotel + 10 * 100
  }


  function delBlue(air, hotel, dining, store) {
    return dining * 2 + air * 2 + 1.5 * store + hotel + 20 * 100
  }


  function delGold(air, hotel, dining, store) {
    return dining * 2 + store * 2.5 + air * 2 + hotel - 99 * 100 + 80 * 100
  }


  function delPlat(air, hotel, dining, store) {
    return hotel * 3 + air * 3 + dining * 3 + store * 3.5 - 250 * 100 + 280 * 100
  }


  function delRes(air, hotel, dining, store) {
    return air * 3.5 + hotel + 1.5 * store + dining - 550 * 100 + 650 * 100
  }


  function hilHon(air, hotel, dining, store) {
    return air * 3 + hotel * 7 + dining * 5 + store * 7.5 + 70 * 100
  }


  function hilSur(air, hotel, dining, store) {
    return air * 3 + hotel * 12 + dining * 6 + store * 9 - 95 * 100 + 150 * 100
  }


  function hilAsp(air, hotel, dining, store) {
    return air * 7 + hotel * 14 + dining * 6 + store * 4.5 - 450 * 100 + 700 * 100
  }


  function marBold(air, hotel, dining, store) {
    return hotel * 14 + air * 3 + dining + store * 1.5 + 60 * 100
  }


  function marBound(air, hotel, dining, store) {
    return hotel * 17 + air * 2 + dining * 2 + store * 3 - 95 * 100 + 125 * 100
  }


  function marBril(air, hotel, dining, store) {
    return hotel * 20 + (air + dining) * 3 + store * 3 - 450 * 100 + 550 * 100
  }


  function chasePref(air, hotel, dining, store) {
    return (air + hotel) * 5 * 0.9 + (
      air + hotel) * 2 * 0.1 + dining * 3 + store * 3 * 0.1 + 0.05 * 3 * hotel - 95 * 100 + 120 * 100
  }


  function chaseRes(air, hotel, dining, store) {
    return hotel * 11 + air * 3 + dining * 3 * 0.99 + dining * 10 * 0.01 + store - 550 * 100 + 650 * 100
  }


  function swPlus(air, hotel, dining, store) {
    return air * 2 + air * 0.1 * 2 + hotel * 0.05 * 2 + hotel + dining + store - 69 * 100 + 60 * 100
  }


  function swPri(air, hotel, dining, store) {
    return air * 3 + air * 0.1 * 2 + hotel * 0.05 * 2 + hotel + dining + store - 149 * 100 + 160 * 100
  }


  function swPrem(air, hotel, dining, store) {
    return air * 3 + air * 0.1 * 2 + hotel * 0.05 * 2 + hotel + dining + store - 99 * 100 + 110 * 100
  }


  function unGate(air, hotel, dining, store) {
    return air * 2.2 + 2 * store + dining + air * 2 * 0.1 + hotel + 30 * 100
  }


  function unExp(air, hotel, dining, store) {
    return air * 2.2 + 2 * dining + 2 * hotel + store * 1.5 - 95 * 100 + 90 * 100
  }


  function unQuest(air, hotel, dining, store) {
    return air * 3.3 + 2 * dining + air * 3 * (
      1.1 - united) + hotel * 2 * 0.05 + store + hotel - 250 * 100 + 240 * 100
  }


  function unInf(air, hotel, dining, store) {
    return air * 4.4 + 2 * dining + 2 * (hotel + (1.1 - united)) + store - 525 * 100 + 550 * 100
  }


  function ihgTrav(air, hotel, dining, store) {
    return hotel * 15 + air * 2 + store * 2 + dining * 2 + 40 * 100
  }


  function ihgPrem(air, hotel, dining, store) {
    return hotel * 25 + air * 2 + store * 2 + dining * 2 - 89 * 100 + 110 * 100
  }


  function hyattCard(air, hotel, dining, store) {
    return hotel * 9 + 2 * dining + 2.2 * air + store - 95 * 100 + 140 * 100
  }


  function citiPrem(air, hotel, dining, store) {
    return dining * 3 + store * 4.5 + 3 * air + 3 * hotel - 95 * 100 + 130 * 100
  }


  function amerMile(air, hotel, dining, store) {
    return 2 * store + 2 * air + hotel + dining + 40 * 100
  }


  function amerPlat(air, hotel, dining, store) {
    return 3 * air + 2 * dining + hotel + store - 99 * 100 + 150 * 100
  }


  function amerExec(air, hotel, dining, store) {
    return 2 * air + dining + hotel + store + 150 * 100 - 450 * 100
  }


  ihg *= 0.5
  hilton *= 0.6
  hyatt *= 1.7
  marriott *= 0.8
  alaska *= 1.8
  american *= 1.68
  delta *= 1.48
  jetblue *= 1.2
  southwest *= 1.5
  united *= 1.13

  let cardList = [amexPlat(air, hotel, dining, store), amexGold(air, hotel, dining, store),
  amexGreen(air, hotel, dining, store),
  amexEd(air, hotel, dining, store), amexEdp(
    air, hotel, dining, store), amexBlue(air, hotel, dining, store),
  delBlue(air, hotel, dining, store), delGold(
    air, hotel, dining, store), delPlat(air, hotel, dining, store),
  delRes(air, hotel, dining, store), hilHon(
    air, hotel, dining, store), hilSur(air, hotel, dining, store),
  hilAsp(air, hotel, dining, store), marBold(
    air, hotel, dining, store), marBound(air, hotel, dining, store),
  marBril(air, hotel, dining, store), chasePref(
    air, hotel, dining, store), chaseRes(air, hotel, dining, store),
  swPlus(air, hotel, dining, store), swPri(air, hotel, dining, store), swPrem(
    air, hotel, dining, store), unGate(air, hotel, dining, store),
  unExp(air, hotel, dining, store), unQuest(
    air, hotel, dining, store), unInf(air, hotel, dining, store),
  ihgTrav(air, hotel, dining, store), ihgPrem(
    air, hotel, dining, store), hyattCard(air, hotel, dining, store),
  citiPrem(air, hotel, dining, store), amerMile(air, hotel, dining, store),
  amerPlat(air, hotel, dining, store), amerExec(air, hotel, dining, store)]

  let cardListAlaskaIHG = []
  let cardListAmericanIHG = []
  let cardListDeltaIHG = []
  let cardListJetBlueIHG = []
  let cardListSouthwestIHG = []
  let cardListUnitedIHG = []

  let cardListAlaskaHilton = []
  let cardListAmericanHilton = []
  let cardListDeltaHilton = []
  let cardListJetBlueHilton = []
  let cardListSouthwestHilton = []
  let cardListUnitedHilton = []

  let cardListAlaskaHyatt = []
  let cardListAmericanHyatt = []
  let cardListDeltaHyatt = []
  let cardListJetBlueHyatt = []
  let cardListSouthwestHyatt = []
  let cardListUnitedHyatt = []

  let cardListAlaskaMarriott = []
  let cardListAmericanMarriott = []
  let cardListDeltaMarriott = []
  let cardListJetBlueMarriott = []
  let cardListSouthwestMarriott = []
  let cardListUnitedMarriott = []

  // Amex
  for (score of cardList.slice(0, 6)) {
  let ih = 0
  let hil = hilton * 2
  let hy = 0
  let mar = marriott
  let ak = 0
  let am = 0
  let dl = delta
  let jb = jetblue * 0.8
  let sw = 0
  let un = 0
  cardListAlaskaIHG.push(weightedAvg(ih, ak, weight) * score)
  cardListAmericanIHG.push(weightedAvg(ih, am, weight) * score)
  cardListDeltaIHG.push(weightedAvg(ih, dl, weight) * score)
  cardListJetBlueIHG.push(weightedAvg(ih, jb, weight) * score)
  cardListSouthwestIHG.push(weightedAvg(ih, sw, weight) * score)
  cardListUnitedIHG.push(weightedAvg(ih, un, weight) * score)

  cardListAlaskaHilton.push(weightedAvg(hil, ak, weight) * score)
  cardListAmericanHilton.push(weightedAvg(hil, am, weight) * score)
  cardListDeltaHilton.push(weightedAvg(hil, dl, weight) * score)
  cardListJetBlueHilton.push(weightedAvg(hil, jb, weight) * score)
  cardListSouthwestHilton.push(weightedAvg(hil, sw, weight) * score)
  cardListUnitedHilton.push(weightedAvg(hil, un, weight) * score)

  cardListAlaskaHyatt.push(weightedAvg(hy, ak, weight) * score)
  cardListAmericanHyatt.push(weightedAvg(hy, am, weight) * score)
  cardListDeltaHyatt.push(weightedAvg(hy, dl, weight) * score)
  cardListJetBlueHyatt.push(weightedAvg(hy, jb, weight) * score)
  cardListSouthwestHyatt.push(weightedAvg(hy, sw, weight) * score)
  cardListUnitedHyatt.push(weightedAvg(hy, un, weight) * score)

  cardListAlaskaMarriott.push(weightedAvg(mar, ak, weight) * score)
  cardListAmericanMarriott.push(weightedAvg(mar, am, weight) * score)
  cardListDeltaMarriott.push(weightedAvg(mar, dl, weight) * score)
  cardListJetBlueMarriott.push(weightedAvg(mar, jb, weight) * score)
  cardListSouthwestMarriott.push(weightedAvg(mar, sw, weight) * score)
  cardListUnitedMarriott.push(weightedAvg(mar, un, weight) * score)
  }

  // Delta
  for (score of cardList.slice(6, 10)) {
  let ih = 0
  let hil = 0
  let hy = 0
  let mar = 0
  let ak = 0
  let am = 0
  let dl = delta
  let jb = 0
  let sw = 0
  let un = 0
  cardListAlaskaIHG.push(weightedAvg(ih, ak, weight) * score)
  cardListAmericanIHG.push(weightedAvg(ih, am, weight) * score)
  cardListDeltaIHG.push(weightedAvg(ih, dl, weight) * score)
  cardListJetBlueIHG.push(weightedAvg(ih, jb, weight) * score)
  cardListSouthwestIHG.push(weightedAvg(ih, sw, weight) * score)
  cardListUnitedIHG.push(weightedAvg(ih, un, weight) * score)

  cardListAlaskaHilton.push(weightedAvg(hil, ak, weight) * score)
  cardListAmericanHilton.push(weightedAvg(hil, am, weight) * score)
  cardListDeltaHilton.push(weightedAvg(hil, dl, weight) * score)
  cardListJetBlueHilton.push(weightedAvg(hil, jb, weight) * score)
  cardListSouthwestHilton.push(weightedAvg(hil, sw, weight) * score)
  cardListUnitedHilton.push(weightedAvg(hil, un, weight) * score)

  cardListAlaskaHyatt.push(weightedAvg(hy, ak, weight) * score)
  cardListAmericanHyatt.push(weightedAvg(hy, am, weight) * score)
  cardListDeltaHyatt.push(weightedAvg(hy, dl, weight) * score)
  cardListJetBlueHyatt.push(weightedAvg(hy, jb, weight) * score)
  cardListSouthwestHyatt.push(weightedAvg(hy, sw, weight) * score)
  cardListUnitedHyatt.push(weightedAvg(hy, un, weight) * score)

  cardListAlaskaMarriott.push(weightedAvg(mar, ak, weight) * score)
  cardListAmericanMarriott.push(weightedAvg(mar, am, weight) * score)
  cardListDeltaMarriott.push(weightedAvg(mar, dl, weight) * score)
  cardListJetBlueMarriott.push(weightedAvg(mar, jb, weight) * score)
  cardListSouthwestMarriott.push(weightedAvg(mar, sw, weight) * score)
  cardListUnitedMarriott.push(weightedAvg(mar, un, weight) * score)
  }

  // Hilton
  for (score of cardList.slice(10, 13)) {
  let ih = 0
  let hil = hilton
  let hy = 0
  let mar = 0
  let ak = 0
  let am = 0
  let dl = 0.1 * delta
  let jb = 0
  let sw = 0
  let un = 0.1 * united
  cardListAlaskaIHG.push(weightedAvg(ih, ak, weight) * score)
  cardListAmericanIHG.push(weightedAvg(ih, am, weight) * score)
  cardListDeltaIHG.push(weightedAvg(ih, dl, weight) * score)
  cardListJetBlueIHG.push(weightedAvg(ih, jb, weight) * score)
  cardListSouthwestIHG.push(weightedAvg(ih, sw, weight) * score)
  cardListUnitedIHG.push(weightedAvg(ih, un, weight) * score)

  cardListAlaskaHilton.push(weightedAvg(hil, ak, weight) * score)
  cardListAmericanHilton.push(weightedAvg(hil, am, weight) * score)
  cardListDeltaHilton.push(weightedAvg(hil, dl, weight) * score)
  cardListJetBlueHilton.push(weightedAvg(hil, jb, weight) * score)
  cardListSouthwestHilton.push(weightedAvg(hil, sw, weight) * score)
  cardListUnitedHilton.push(weightedAvg(hil, un, weight) * score)

  cardListAlaskaHyatt.push(weightedAvg(hy, ak, weight) * score)
  cardListAmericanHyatt.push(weightedAvg(hy, am, weight) * score)
  cardListDeltaHyatt.push(weightedAvg(hy, dl, weight) * score)
  cardListJetBlueHyatt.push(weightedAvg(hy, jb, weight) * score)
  cardListSouthwestHyatt.push(weightedAvg(hy, sw, weight) * score)
  cardListUnitedHyatt.push(weightedAvg(hy, un, weight) * score)

  cardListAlaskaMarriott.push(weightedAvg(mar, ak, weight) * score)
  cardListAmericanMarriott.push(weightedAvg(mar, am, weight) * score)
  cardListDeltaMarriott.push(weightedAvg(mar, dl, weight) * score)
  cardListJetBlueMarriott.push(weightedAvg(mar, jb, weight) * score)
  cardListSouthwestMarriott.push(weightedAvg(mar, sw, weight) * score)
  cardListUnitedMarriott.push(weightedAvg(mar, un, weight) * score)
  }

  // Marriott
  for (score of cardList.slice(13, 16)) {
  let ih = 0
  let hil = 0
  let hy = 0
  let mar = marriott
  let ak = (1 / 3) * alaska
  let am = (1 / 3) * american
  let dl = (1 / 3) * delta
  let jb = (1 / 6) * jetblue
  let sw = (1 / 3) * southwest
  let un = (1.1 / 3) * united
  cardListAlaskaIHG.push(weightedAvg(ih, ak, weight) * score)
  cardListAmericanIHG.push(weightedAvg(ih, am, weight) * score)
  cardListDeltaIHG.push(weightedAvg(ih, dl, weight) * score)
  cardListJetBlueIHG.push(weightedAvg(ih, jb, weight) * score)
  cardListSouthwestIHG.push(weightedAvg(ih, sw, weight) * score)
  cardListUnitedIHG.push(weightedAvg(ih, un, weight) * score)

  cardListAlaskaHilton.push(weightedAvg(hil, ak, weight) * score)
  cardListAmericanHilton.push(weightedAvg(hil, am, weight) * score)
  cardListDeltaHilton.push(weightedAvg(hil, dl, weight) * score)
  cardListJetBlueHilton.push(weightedAvg(hil, jb, weight) * score)
  cardListSouthwestHilton.push(weightedAvg(hil, sw, weight) * score)
  cardListUnitedHilton.push(weightedAvg(hil, un, weight) * score)

  cardListAlaskaHyatt.push(weightedAvg(hy, ak, weight) * score)
  cardListAmericanHyatt.push(weightedAvg(hy, am, weight) * score)
  cardListDeltaHyatt.push(weightedAvg(hy, dl, weight) * score)
  cardListJetBlueHyatt.push(weightedAvg(hy, jb, weight) * score)
  cardListSouthwestHyatt.push(weightedAvg(hy, sw, weight) * score)
  cardListUnitedHyatt.push(weightedAvg(hy, un, weight) * score)

  cardListAlaskaMarriott.push(weightedAvg(mar, ak, weight) * score)
  cardListAmericanMarriott.push(weightedAvg(mar, am, weight) * score)
  cardListDeltaMarriott.push(weightedAvg(mar, dl, weight) * score)
  cardListJetBlueMarriott.push(weightedAvg(mar, jb, weight) * score)
  cardListSouthwestMarriott.push(weightedAvg(mar, sw, weight) * score)
  cardListUnitedMarriott.push(weightedAvg(mar, un, weight) * score)
  }

  // Chase
  for (score of cardList.slice(16, 18)) {
  let ih = ihg
  let hil = 0
  let hy = hyatt
  let mar = marriott
  let ak = 0
  let am = 0
  let dl = 0
  let jb = jetblue
  let sw = southwest
  let un = united
  cardListAlaskaIHG.push(weightedAvg(ih, ak, weight) * score)
  cardListAmericanIHG.push(weightedAvg(ih, am, weight) * score)
  cardListDeltaIHG.push(weightedAvg(ih, dl, weight) * score)
  cardListJetBlueIHG.push(weightedAvg(ih, jb, weight) * score)
  cardListSouthwestIHG.push(weightedAvg(ih, sw, weight) * score)
  cardListUnitedIHG.push(weightedAvg(ih, un, weight) * score)

  cardListAlaskaHilton.push(weightedAvg(hil, ak, weight) * score)
  cardListAmericanHilton.push(weightedAvg(hil, am, weight) * score)
  cardListDeltaHilton.push(weightedAvg(hil, dl, weight) * score)
  cardListJetBlueHilton.push(weightedAvg(hil, jb, weight) * score)
  cardListSouthwestHilton.push(weightedAvg(hil, sw, weight) * score)
  cardListUnitedHilton.push(weightedAvg(hil, un, weight) * score)

  cardListAlaskaHyatt.push(weightedAvg(hy, ak, weight) * score)
  cardListAmericanHyatt.push(weightedAvg(hy, am, weight) * score)
  cardListDeltaHyatt.push(weightedAvg(hy, dl, weight) * score)
  cardListJetBlueHyatt.push(weightedAvg(hy, jb, weight) * score)
  cardListSouthwestHyatt.push(weightedAvg(hy, sw, weight) * score)
  cardListUnitedHyatt.push(weightedAvg(hy, un, weight) * score)

  cardListAlaskaMarriott.push(weightedAvg(mar, ak, weight) * score)
  cardListAmericanMarriott.push(weightedAvg(mar, am, weight) * score)
  cardListDeltaMarriott.push(weightedAvg(mar, dl, weight) * score)
  cardListJetBlueMarriott.push(weightedAvg(mar, jb, weight) * score)
  cardListSouthwestMarriott.push(weightedAvg(mar, sw, weight) * score)
  cardListUnitedMarriott.push(weightedAvg(mar, un, weight) * score)
  }

  // Southwest
  for (score of cardList.slice(18, 21)) {
  let ih = 0
  let hil = 0
  let hy = 0
  let mar = 0
  let ak = 0
  let am = 0
  let dl = 0
  let jb = 0
  let sw = southwest
  let un = 0
  cardListAlaskaIHG.push(weightedAvg(ih, ak, weight) * score)
  cardListAmericanIHG.push(weightedAvg(ih, am, weight) * score)
  cardListDeltaIHG.push(weightedAvg(ih, dl, weight) * score)
  cardListJetBlueIHG.push(weightedAvg(ih, jb, weight) * score)
  cardListSouthwestIHG.push(weightedAvg(ih, sw, weight) * score)
  cardListUnitedIHG.push(weightedAvg(ih, un, weight) * score)

  cardListAlaskaHilton.push(weightedAvg(hil, ak, weight) * score)
  cardListAmericanHilton.push(weightedAvg(hil, am, weight) * score)
  cardListDeltaHilton.push(weightedAvg(hil, dl, weight) * score)
  cardListJetBlueHilton.push(weightedAvg(hil, jb, weight) * score)
  cardListSouthwestHilton.push(weightedAvg(hil, sw, weight) * score)
  cardListUnitedHilton.push(weightedAvg(hil, un, weight) * score)

  cardListAlaskaHyatt.push(weightedAvg(hy, ak, weight) * score)
  cardListAmericanHyatt.push(weightedAvg(hy, am, weight) * score)
  cardListDeltaHyatt.push(weightedAvg(hy, dl, weight) * score)
  cardListJetBlueHyatt.push(weightedAvg(hy, jb, weight) * score)
  cardListSouthwestHyatt.push(weightedAvg(hy, sw, weight) * score)
  cardListUnitedHyatt.push(weightedAvg(hy, un, weight) * score)

  cardListAlaskaMarriott.push(weightedAvg(mar, ak, weight) * score)
  cardListAmericanMarriott.push(weightedAvg(mar, am, weight) * score)
  cardListDeltaMarriott.push(weightedAvg(mar, dl, weight) * score)
  cardListJetBlueMarriott.push(weightedAvg(mar, jb, weight) * score)
  cardListSouthwestMarriott.push(weightedAvg(mar, sw, weight) * score)
  cardListUnitedMarriott.push(weightedAvg(mar, un, weight) * score)
  }

  // United
  for (score of cardList.slice(21, 25)) {
  let ih = 0
  let hil = 0
  let hy = 0
  let mar = 0
  let ak = 0
  let am = 0
  let dl = 0
  let jb = 0
  let sw = 0
  let un = united
  cardListAlaskaIHG.push(weightedAvg(ih, ak, weight) * score)
  cardListAmericanIHG.push(weightedAvg(ih, am, weight) * score)
  cardListDeltaIHG.push(weightedAvg(ih, dl, weight) * score)
  cardListJetBlueIHG.push(weightedAvg(ih, jb, weight) * score)
  cardListSouthwestIHG.push(weightedAvg(ih, sw, weight) * score)
  cardListUnitedIHG.push(weightedAvg(ih, un, weight) * score)

  cardListAlaskaHilton.push(weightedAvg(hil, ak, weight) * score)
  cardListAmericanHilton.push(weightedAvg(hil, am, weight) * score)
  cardListDeltaHilton.push(weightedAvg(hil, dl, weight) * score)
  cardListJetBlueHilton.push(weightedAvg(hil, jb, weight) * score)
  cardListSouthwestHilton.push(weightedAvg(hil, sw, weight) * score)
  cardListUnitedHilton.push(weightedAvg(hil, un, weight) * score)

  cardListAlaskaHyatt.push(weightedAvg(hy, ak, weight) * score)
  cardListAmericanHyatt.push(weightedAvg(hy, am, weight) * score)
  cardListDeltaHyatt.push(weightedAvg(hy, dl, weight) * score)
  cardListJetBlueHyatt.push(weightedAvg(hy, jb, weight) * score)
  cardListSouthwestHyatt.push(weightedAvg(hy, sw, weight) * score)
  cardListUnitedHyatt.push(weightedAvg(hy, un, weight) * score)

  cardListAlaskaMarriott.push(weightedAvg(mar, ak, weight) * score)
  cardListAmericanMarriott.push(weightedAvg(mar, am, weight) * score)
  cardListDeltaMarriott.push(weightedAvg(mar, dl, weight) * score)
  cardListJetBlueMarriott.push(weightedAvg(mar, jb, weight) * score)
  cardListSouthwestMarriott.push(weightedAvg(mar, sw, weight) * score)
  cardListUnitedMarriott.push(weightedAvg(mar, un, weight) * score)
  }

  // IHG
  for (score of cardList.slice(25, 27)) {
  let ih = ihg
  let hil = 0
  let hy = 0
  let mar = 0
  let ak = 0.2 * alaska
  let am = 0.2 * american
  let dl = 0.2 * delta
  let jb = 0.2 * jetblue
  let sw = 0
  let un = 0.2 * united
  cardListAlaskaIHG.push(weightedAvg(ih, ak, weight) * score)
  cardListAmericanIHG.push(weightedAvg(ih, am, weight) * score)
  cardListDeltaIHG.push(weightedAvg(ih, dl, weight) * score)
  cardListJetBlueIHG.push(weightedAvg(ih, jb, weight) * score)
  cardListSouthwestIHG.push(weightedAvg(ih, sw, weight) * score)
  cardListUnitedIHG.push(weightedAvg(ih, un, weight) * score)

  cardListAlaskaHilton.push(weightedAvg(hil, ak, weight) * score)
  cardListAmericanHilton.push(weightedAvg(hil, am, weight) * score)
  cardListDeltaHilton.push(weightedAvg(hil, dl, weight) * score)
  cardListJetBlueHilton.push(weightedAvg(hil, jb, weight) * score)
  cardListSouthwestHilton.push(weightedAvg(hil, sw, weight) * score)
  cardListUnitedHilton.push(weightedAvg(hil, un, weight) * score)

  cardListAlaskaHyatt.push(weightedAvg(hy, ak, weight) * score)
  cardListAmericanHyatt.push(weightedAvg(hy, am, weight) * score)
  cardListDeltaHyatt.push(weightedAvg(hy, dl, weight) * score)
  cardListJetBlueHyatt.push(weightedAvg(hy, jb, weight) * score)
  cardListSouthwestHyatt.push(weightedAvg(hy, sw, weight) * score)
  cardListUnitedHyatt.push(weightedAvg(hy, un, weight) * score)

  cardListAlaskaMarriott.push(weightedAvg(mar, ak, weight) * score)
  cardListAmericanMarriott.push(weightedAvg(mar, am, weight) * score)
  cardListDeltaMarriott.push(weightedAvg(mar, dl, weight) * score)
  cardListJetBlueMarriott.push(weightedAvg(mar, jb, weight) * score)
  cardListSouthwestMarriott.push(weightedAvg(mar, sw, weight) * score)
  cardListUnitedMarriott.push(weightedAvg(mar, un, weight) * score)
  }

  // Hyatt
  for (score of cardList.slice(27, 28)) {
  let ih = 0
  let hil = 0
  let hy = hyatt
  let mar = 0
  let ak = 0
  let am = 0.4 * american
  let dl = 0.4 * delta
  let jb = 0
  let sw = (2.4 / 5) * southwest
  let un = 0.4 * united
  cardListAlaskaIHG.push(weightedAvg(ih, ak, weight) * score)
  cardListAmericanIHG.push(weightedAvg(ih, am, weight) * score)
  cardListDeltaIHG.push(weightedAvg(ih, dl, weight) * score)
  cardListJetBlueIHG.push(weightedAvg(ih, jb, weight) * score)
  cardListSouthwestIHG.push(weightedAvg(ih, sw, weight) * score)
  cardListUnitedIHG.push(weightedAvg(ih, un, weight) * score)

  cardListAlaskaHilton.push(weightedAvg(hil, ak, weight) * score)
  cardListAmericanHilton.push(weightedAvg(hil, am, weight) * score)
  cardListDeltaHilton.push(weightedAvg(hil, dl, weight) * score)
  cardListJetBlueHilton.push(weightedAvg(hil, jb, weight) * score)
  cardListSouthwestHilton.push(weightedAvg(hil, sw, weight) * score)
  cardListUnitedHilton.push(weightedAvg(hil, un, weight) * score)

  cardListAlaskaHyatt.push(weightedAvg(hy, ak, weight) * score)
  cardListAmericanHyatt.push(weightedAvg(hy, am, weight) * score)
  cardListDeltaHyatt.push(weightedAvg(hy, dl, weight) * score)
  cardListJetBlueHyatt.push(weightedAvg(hy, jb, weight) * score)
  cardListSouthwestHyatt.push(weightedAvg(hy, sw, weight) * score)
  cardListUnitedHyatt.push(weightedAvg(hy, un, weight) * score)

  cardListAlaskaMarriott.push(weightedAvg(mar, ak, weight) * score)
  cardListAmericanMarriott.push(weightedAvg(mar, am, weight) * score)
  cardListDeltaMarriott.push(weightedAvg(mar, dl, weight) * score)
  cardListJetBlueMarriott.push(weightedAvg(mar, jb, weight) * score)
  cardListSouthwestMarriott.push(weightedAvg(mar, sw, weight) * score)
  cardListUnitedMarriott.push(weightedAvg(mar, un, weight) * score)
  }

  // Citi
  for (score of cardList.slice(28, 29)) {
  let ih = 0
  let hil = 0
  let hy = 0
  let mar = 0
  let ak = 0
  let am = 0
  let dl = 0
  let jb = jetblue
  let sw = 0
  let un = 0
  cardListAlaskaIHG.push(weightedAvg(ih, ak, weight) * score)
  cardListAmericanIHG.push(weightedAvg(ih, am, weight) * score)
  cardListDeltaIHG.push(weightedAvg(ih, dl, weight) * score)
  cardListJetBlueIHG.push(weightedAvg(ih, jb, weight) * score)
  cardListSouthwestIHG.push(weightedAvg(ih, sw, weight) * score)
  cardListUnitedIHG.push(weightedAvg(ih, un, weight) * score)

  cardListAlaskaHilton.push(weightedAvg(hil, ak, weight) * score)
  cardListAmericanHilton.push(weightedAvg(hil, am, weight) * score)
  cardListDeltaHilton.push(weightedAvg(hil, dl, weight) * score)
  cardListJetBlueHilton.push(weightedAvg(hil, jb, weight) * score)
  cardListSouthwestHilton.push(weightedAvg(hil, sw, weight) * score)
  cardListUnitedHilton.push(weightedAvg(hil, un, weight) * score)

  cardListAlaskaHyatt.push(weightedAvg(hy, ak, weight) * score)
  cardListAmericanHyatt.push(weightedAvg(hy, am, weight) * score)
  cardListDeltaHyatt.push(weightedAvg(hy, dl, weight) * score)
  cardListJetBlueHyatt.push(weightedAvg(hy, jb, weight) * score)
  cardListSouthwestHyatt.push(weightedAvg(hy, sw, weight) * score)
  cardListUnitedHyatt.push(weightedAvg(hy, un, weight) * score)

  cardListAlaskaMarriott.push(weightedAvg(mar, ak, weight) * score)
  cardListAmericanMarriott.push(weightedAvg(mar, am, weight) * score)
  cardListDeltaMarriott.push(weightedAvg(mar, dl, weight) * score)
  cardListJetBlueMarriott.push(weightedAvg(mar, jb, weight) * score)
  cardListSouthwestMarriott.push(weightedAvg(mar, sw, weight) * score)
  cardListUnitedMarriott.push(weightedAvg(mar, un, weight) * score)
  }

  // American
  for (score of cardList.slice(29, 32)) {
  let ih = 0
  let hil = 0
  let hy = 0
  let mar = 0
  let ak = 0
  let am = american
  let dl = 0
  let jb = 0
  let sw = 0
  let un = 0
  cardListAlaskaIHG.push(weightedAvg(ih, ak, weight) * score)
  cardListAmericanIHG.push(weightedAvg(ih, am, weight) * score)
  cardListDeltaIHG.push(weightedAvg(ih, dl, weight) * score)
  cardListJetBlueIHG.push(weightedAvg(ih, jb, weight) * score)
  cardListSouthwestIHG.push(weightedAvg(ih, sw, weight) * score)
  cardListUnitedIHG.push(weightedAvg(ih, un, weight) * score)

  cardListAlaskaHilton.push(weightedAvg(hil, ak, weight) * score)
  cardListAmericanHilton.push(weightedAvg(hil, am, weight) * score)
  cardListDeltaHilton.push(weightedAvg(hil, dl, weight) * score)
  cardListJetBlueHilton.push(weightedAvg(hil, jb, weight) * score)
  cardListSouthwestHilton.push(weightedAvg(hil, sw, weight) * score)
  cardListUnitedHilton.push(weightedAvg(hil, un, weight) * score)

  cardListAlaskaHyatt.push(weightedAvg(hy, ak, weight) * score)
  cardListAmericanHyatt.push(weightedAvg(hy, am, weight) * score)
  cardListDeltaHyatt.push(weightedAvg(hy, dl, weight) * score)
  cardListJetBlueHyatt.push(weightedAvg(hy, jb, weight) * score)
  cardListSouthwestHyatt.push(weightedAvg(hy, sw, weight) * score)
  cardListUnitedHyatt.push(weightedAvg(hy, un, weight) * score)

  cardListAlaskaMarriott.push(weightedAvg(mar, ak, weight) * score)
  cardListAmericanMarriott.push(weightedAvg(mar, am, weight) * score)
  cardListDeltaMarriott.push(weightedAvg(mar, dl, weight) * score)
  cardListJetBlueMarriott.push(weightedAvg(mar, jb, weight) * score)
  cardListSouthwestMarriott.push(weightedAvg(mar, sw, weight) * score)
  cardListUnitedMarriott.push(weightedAvg(mar, un, weight) * score)
  }

  let num
  for (num of cardListAlaskaIHG) {
    cardListAlaskaIHG[cardListAlaskaIHG.indexOf(
      num)] += 0.000000000001 * (cardListAlaskaIHG.indexOf(num) + 1)
  }
  for (num of cardListAmericanIHG) {
    cardListAmericanIHG[cardListAmericanIHG.indexOf(
      num)] += 0.000000000002 * (cardListAmericanIHG.indexOf(num) + 1)
  }
  for (num of cardListDeltaIHG) {
    cardListDeltaIHG[cardListDeltaIHG.indexOf(
      num)] += 0.000000000003 * (cardListDeltaIHG.indexOf(num) + 1)
  }
  for (num of cardListJetBlueIHG) {
    cardListJetBlueIHG[cardListJetBlueIHG.indexOf(
      num)] += 0.000000000004 * (cardListJetBlueIHG.indexOf(num) + 1)
  }
  for (num of cardListSouthwestIHG) {
    cardListSouthwestIHG[cardListSouthwestIHG.indexOf(
      num)] += 0.000000000005 * (cardListSouthwestIHG.indexOf(num) + 1)
  }
  for (num of cardListUnitedIHG) {
    cardListUnitedIHG[cardListUnitedIHG.indexOf(
      num)] += 0.000000000006 * (cardListUnitedIHG.indexOf(num) + 1)
  }
  for (num of cardListAlaskaHilton) {
    cardListAlaskaHilton[cardListAlaskaHilton.indexOf(
      num)] += 0.000000000007 * (cardListAlaskaHilton.indexOf(num) + 3)
  }
  for (num of cardListAmericanHilton) {
    cardListAmericanHilton[cardListAmericanHilton.indexOf(
      num)] += 0.000000000008 * (cardListAmericanHilton.indexOf(num) + 6)
  }
  for (num of cardListDeltaHilton) {
    cardListDeltaHilton[cardListDeltaHilton.indexOf(
      num)] += 0.000000000009 * (cardListDeltaHilton.indexOf(num) + 9)
  }
  for (num of cardListJetBlueHilton) {
    cardListJetBlueHilton[cardListJetBlueHilton.indexOf(
      num)] += 0.000000000010 * (cardListJetBlueHilton.indexOf(num) + 12)
  }
  for (num of cardListSouthwestHilton) {
    cardListSouthwestHilton[cardListSouthwestHilton.indexOf(
      num)] += 0.000000000011 * (cardListSouthwestHilton.indexOf(num) + 15)
  }
  for (num of cardListUnitedHilton) {
    cardListUnitedHilton[cardListUnitedHilton.indexOf(
      num)] += 0.000000000012 * (cardListUnitedHilton.indexOf(num) + 18)
  }
  for (num of cardListAlaskaHyatt) {
    cardListAlaskaHyatt[cardListAlaskaHyatt.indexOf(
      num)] += 0.000000000013 * (cardListAlaskaHyatt.indexOf(num) + 1)
  }
  for (num of cardListAmericanHyatt) {
    cardListAmericanHyatt[cardListAmericanHyatt.indexOf(
      num)] += 0.000000000014 * (cardListAmericanHyatt.indexOf(num) + 1)
  }
  for (num of cardListDeltaHyatt) {
    cardListDeltaHyatt[cardListDeltaHyatt.indexOf(
      num)] += 0.000000000015 * (cardListDeltaHyatt.indexOf(num) + 1)
  }
  for (num of cardListJetBlueHyatt) {
    cardListJetBlueHyatt[cardListJetBlueHyatt.indexOf(
      num)] += 0.000000000016 * (cardListJetBlueHyatt.indexOf(num) + 1)
  }
  for (num of cardListSouthwestHyatt) {
    cardListSouthwestHyatt[cardListSouthwestHyatt.indexOf(
      num)] += 0.000000000017 * (cardListSouthwestHyatt.indexOf(num) + 1)
  }
  for (num of cardListUnitedHyatt) {
    cardListUnitedHyatt[cardListUnitedHyatt.indexOf(
      num)] += 0.000000000018 * (cardListUnitedHyatt.indexOf(num) + 1)
  }
  for (num of cardListAlaskaMarriott) {
    cardListAlaskaMarriott[cardListAlaskaMarriott.indexOf(
      num)] += 0.000000000019 * (cardListAlaskaMarriott.indexOf(num) + 1)
  }
  for (num of cardListAmericanMarriott) {
    cardListAmericanMarriott[cardListAmericanMarriott.indexOf(
      num)] += 0.000000000020 * (cardListAmericanMarriott.indexOf(num) + 1)
  }
  for (num of cardListDeltaMarriott) {
    cardListDeltaMarriott[cardListDeltaMarriott.indexOf(
      num)] += 0.000000000021 * (cardListDeltaMarriott.indexOf(num) + 1)
  }
  for (num of cardListJetBlueMarriott) {
    cardListJetBlueMarriott[cardListJetBlueMarriott.indexOf(
      num)] += 0.000000000022 * (cardListJetBlueMarriott.indexOf(num) + 1)
  }
  for (num of cardListSouthwestMarriott) {
    cardListSouthwestMarriott[cardListSouthwestMarriott.indexOf(
      num)] += 0.000000000023 * (cardListSouthwestMarriott.indexOf(num) + 1)
  }
  for (num of cardListUnitedMarriott) {
    cardListUnitedMarriott[cardListUnitedMarriott.indexOf(
      num)] += 0.000000000024 * (cardListUnitedMarriott.indexOf(num) + 1)
  }

  // Creates links for each card and rewards program
  const amexPlatLink = 'https://www.americanexpress.com/us/credit-cards/card/platinum/'
  const amexGoldLink = 'https://www.americanexpress.com/us/credit-cards/card/gold-card/'
  const amexGreenLink = 'https://www.americanexpress.com/us/credit-cards/card/green/'
  const amexEdLink = 'https://www.americanexpress.com/us/credit-cards/card/amex-everyday/'
  const amexEdpLink = 'https://www.americanexpress.com/us/credit-cards/card/amex-everyday-preferred/'
  const amexBlueLink = 'https://www.americanexpress.com/us/credit-cards/card/blue/'

  const chasePreferredLink = 'https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred'
  const chaseReserveLink = 'https://creditcards.chase.com/rewards-credit-cards/sapphire/reserve'

  const citiPremierLink = 'https://www.citi.com/credit-cards/citi-premier-credit-card'

  const americanMileLink = 'https://www.citi.com/credit-cards/aadvantage-mile-up-credit-card'
  const americanPlatinumLink = 'https://www.citi.com/credit-cards/citi-aadvantage-platinum-elite-credit-card'
  const americanExecutiveLink = 'https://www.citi.com/credit-cards/citi-aadvantage-executive-credit-card'

  const deltaBlueLink = 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-blue-american-express-card/'
  const deltaGoldLink = 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-gold-american-express-card/'
  const deltaPlatLink = 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-platinum-american-express-card/'
  const deltaResLink = 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-reserve-american-express-card/'
  
  const southwestPlusLink = 'https://creditcards.chase.com/travel-credit-cards/southwest/plus'
  const southwestPriorityLink = 'https://creditcards.chase.com/travel-credit-cards/southwest/priority'
  const southwestPremierLink = 'https://creditcards.chase.com/travel-credit-cards/southwest/premier'

  const unitedGatewayLink = 'https://creditcards.chase.com/travel-credit-cards/united/united-gateway'
  const unitedExplorerLink = 'https://creditcards.chase.com/travel-credit-cards/united/united-explorer'
  const unitedQuestLink = 'https://creditcards.chase.com/travel-credit-cards/united/united-quest'
  const unitedClubLink = 'https://creditcards.chase.com/travel-credit-cards/united/club-infinite'

  const alaskaMileageLink = 'https://www.alaskaair.com/content/mileage-plan'
  const americanAAdvantageLink = 'https://www.aa.com/i18n/aadvantage-program/aadvantage-program.jsp'
  const deltaSkyMilesLink = 'https://www.delta.com/us/en/skymiles/overview'
  const jetblueLink = 'https://www.jetblue.com/trueblue'
  const southwestLink = 'https://www.southwest.com/rapidrewards/'
  const unitedLink = 'https://www.united.com/en/us/fly/mileageplus.html'

  const ihgLink = 'https://www.ihg.com/rewardsclub/content/us/en/home'
  const hiltonLink = 'https://www.hilton.com/en/hilton-honors/'
  const hyattLink = 'https://world.hyatt.com/content/gp/en/program-overview.html'
  const marriottLink = 'https://www.marriott.com/loyalty.mi'

  const hiltonHonorsLink = 'https://www.americanexpress.com/us/credit-cards/card/hilton-honors/'
  const hiltonSurpassLink = 'https://www.americanexpress.com/us/credit-cards/card/hilton-honors-surpass/'
  const hiltonAspireLink = 'https://www.americanexpress.com/us/credit-cards/card/hilton-honors-aspire/'

  const hyattCardLink ='https://creditcards.chase.com/travel-credit-cards/world-of-hyatt-credit-card'

  const ihgTravelerLink = 'https://creditcards.chase.com/travel-credit-cards/ihg-rewards-club/traveler'
  const ihgPremierLink = 'https://creditcards.chase.com/travel-credit-cards/ihg-rewards-club/premier'
  
  const marriottBoldLink = 'https://creditcards.chase.com/travel-credit-cards/marriott-bonvoy/bold'
  const marriottBoundlessLink = 'https://creditcards.chase.com/travel-credit-cards/marriott-bonvoy/boundless'
  const marriottBrilliantLink = 'https://www.americanexpress.com/us/credit-cards/card/marriott-bonvoy-brilliant/'

  let creditCardsAmexPlat = {}
  let creditCardsAmexGold = {}
  let creditCardsAmexGreen = {}
  let creditCardsAmexED = {}
  let creditCardsAmexEDP = {}
  let creditCardsAmexBlue = {}
  let creditCardsDeltaBlue = {}
  let creditCardsDeltaGold = {}
  let creditCardsDeltaPlat = {}
  let creditCardsDeltaRes = {}
  let creditCardsHilHon = {}
  let creditCardsHilSur = {}
  let creditCardsHilAsp = {}
  let creditCardsMarBold = {}
  let creditCardsMarBound = {}
  let creditCardsMarBril = {}
  let creditCardsChaseSapPref = {}
  let creditCardsChaseSapRes = {}
  let creditCardsSWPlus = {}
  let creditCardsSWPri = {}
  let creditCardsSWPrem = {}
  let creditCardsUnitedGate = {}
  let creditCardsUnitedExp= {}
  let creditCardsUnitedQuest = {}
  let creditCardsUnitedClubInf = {}
  let creditCardsIHGTrav = {}
  let creditCardsIHGPrem = {}
  let creditCardsHyatt = {}
  let creditCardsCitiPrem = {}
  let creditCardsAmerMile = {}
  let creditCardsAmerWorldElite = {}
  let creditCardsAmerExec = {}

  creditCardsAmexPlat[cardListAlaskaIHG[0]] = `<a target=\"blank\" href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexPlat[cardListAmericanIHG[0]] = `<a target=\"blank\" href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexPlat[cardListDeltaIHG[0]] = `<a target=\"blank\" href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexPlat[cardListJetBlueIHG[0]] = `<a target=\"blank\" href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexPlat[cardListSouthwestIHG[0]] = `<a target=\"blank\" href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexPlat[cardListUnitedIHG[0]] = `<a target=\"blank\" href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexPlat[cardListAlaskaHilton[0]] = `<a target=\"blank\" href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexPlat[cardListAmericanHilton[0]] = `<a target=\"blank\" href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexPlat[cardListDeltaHilton[0]] = `<a target=\"blank\" href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexPlat[cardListJetBlueHilton[0]] = `<a target=\"blank\" href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexPlat[cardListSouthwestHilton[0]] = `<a target=\"blank\" href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexPlat[cardListUnitedHilton[0]] = `<a target=\"blank\" href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexPlat[cardListAlaskaHyatt[0]] = `<a target=\"blank\" href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexPlat[cardListAmericanHyatt[0]] = `<a target=\"blank\" href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexPlat[cardListDeltaHyatt[0]] = `<a target=\"blank\" href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexPlat[cardListJetBlueHyatt[0]] = `<a target=\"blank\" href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexPlat[cardListSouthwestHyatt[0]] = `<a target=\"blank\" href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexPlat[cardListUnitedHyatt[0]] = `<a target=\"blank\" href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexPlat[cardListAlaskaMarriott[0]] = `<a target=\"blank\" href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmexPlat[cardListAmericanMarriott[0]] = `<a target=\"blank\" href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmexPlat[cardListDeltaMarriott[0]] = `<a target=\"blank\" href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmexPlat[cardListJetBlueMarriott[0]] = `<a target=\"blank\" href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmexPlat[cardListSouthwestMarriott[0]] = `<a target=\"blank\" href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmexPlat[cardListUnitedMarriott[0]] = `<a target=\"blank\" href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCardsAmexGold[cardListAlaskaIHG[1]] = `<a target=\"blank\" href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexGold[cardListAmericanIHG[1]] = `<a target=\"blank\" href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexGold[cardListDeltaIHG[1]] = `<a target=\"blank\" href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexGold[cardListJetBlueIHG[1]] = `<a target=\"blank\" href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexGold[cardListSouthwestIHG[1]] = `<a target=\"blank\" href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexGold[cardListUnitedIHG[1]] = `<a target=\"blank\" href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexGold[cardListAlaskaHilton[1]] = `<a target=\"blank\" href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexGold[cardListAmericanHilton[1]] = `<a target=\"blank\" href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexGold[cardListDeltaHilton[1]] = `<a target=\"blank\" href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexGold[cardListJetBlueHilton[1]] = `<a target=\"blank\" href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexGold[cardListSouthwestHilton[1]] = `<a target=\"blank\" href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexGold[cardListUnitedHilton[1]] = `<a target=\"blank\" href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexGold[cardListAlaskaHyatt[1]] = `<a target=\"blank\" href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexGold[cardListAmericanHyatt[1]] = `<a target=\"blank\" href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexGold[cardListDeltaHyatt[1]] = `<a target=\"blank\" href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexGold[cardListJetBlueHyatt[1]] = `<a target=\"blank\" href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexGold[cardListSouthwestHyatt[1]] = `<a target=\"blank\" href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexGold[cardListUnitedHyatt[1]] = `<a target=\"blank\" href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexGold[cardListAlaskaMarriott[1]] = `<a target=\"blank\" href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmexGold[cardListAmericanMarriott[1]] = `<a target=\"blank\" href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmexGold[cardListDeltaMarriott[1]] = `<a target=\"blank\" href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmexGold[cardListJetBlueMarriott[1]] = `<a target=\"blank\" href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmexGold[cardListSouthwestMarriott[1]] = `<a target=\"blank\" href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmexGold[cardListUnitedMarriott[1]] = `<a target=\"blank\" href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCardsAmexGreen[cardListAlaskaIHG[2]] = `<a target=\"blank\" href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexGreen[cardListAmericanIHG[2]] = `<a target=\"blank\" href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexGreen[cardListDeltaIHG[2]] = `<a target=\"blank\" href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexGreen[cardListJetBlueIHG[2]] = `<a target=\"blank\" href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexGreen[cardListSouthwestIHG[2]] = `<a target=\"blank\" href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexGreen[cardListUnitedIHG[2]] = `<a target=\"blank\" href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexGreen[cardListAlaskaHilton[2]] = `<a target=\"blank\" href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexGreen[cardListAmericanHilton[2]] = `<a target=\"blank\" href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexGreen[cardListDeltaHilton[2]] = `<a target=\"blank\" href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexGreen[cardListJetBlueHilton[2]] = `<a target=\"blank\" href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexGreen[cardListSouthwestHilton[2]] = `<a target=\"blank\" href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexGreen[cardListUnitedHilton[2]] = `<a target=\"blank\" href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexGreen[cardListAlaskaHyatt[2]] = `<a target=\"blank\" href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexGreen[cardListAmericanHyatt[2]] = `<a target=\"blank\" href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexGreen[cardListDeltaHyatt[2]] = `<a target=\"blank\" href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexGreen[cardListJetBlueHyatt[2]] = `<a target=\"blank\" href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexGreen[cardListSouthwestHyatt[2]] = `<a target=\"blank\" href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexGreen[cardListUnitedHyatt[2]] = `<a target=\"blank\" href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexGreen[cardListAlaskaMarriott[2]] = `<a target=\"blank\" href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmexGreen[cardListAmericanMarriott[2]] = `<a target=\"blank\" href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmexGreen[cardListDeltaMarriott[2]] = `<a target=\"blank\" href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmexGreen[cardListJetBlueMarriott[2]] = `<a target=\"blank\" href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmexGreen[cardListSouthwestMarriott[2]] = `<a target=\"blank\" href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmexGreen[cardListUnitedMarriott[2]] = `<a target=\"blank\" href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCardsAmexED[cardListAlaskaIHG[3]] = `<a target=\"blank\" href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexED[cardListAmericanIHG[3]] = `<a target=\"blank\" href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexED[cardListDeltaIHG[3]] = `<a target=\"blank\" href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexED[cardListJetBlueIHG[3]] = `<a target=\"blank\" href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexED[cardListSouthwestIHG[3]] = `<a target=\"blank\" href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexED[cardListUnitedIHG[3]] = `<a target=\"blank\" href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexED[cardListAlaskaHilton[3]] = `<a target=\"blank\" href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexED[cardListAmericanHilton[3]] = `<a target=\"blank\" href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexED[cardListDeltaHilton[3]] = `<a target=\"blank\" href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexED[cardListJetBlueHilton[3]] = `<a target=\"blank\" href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexED[cardListSouthwestHilton[3]] = `<a target=\"blank\" href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexED[cardListUnitedHilton[3]] = `<a target=\"blank\" href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexED[cardListAlaskaHyatt[3]] = `<a target=\"blank\" href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexED[cardListAmericanHyatt[3]] = `<a target=\"blank\" href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexED[cardListDeltaHyatt[3]] = `<a target=\"blank\" href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexED[cardListJetBlueHyatt[3]] = `<a target=\"blank\" href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexED[cardListSouthwestHyatt[3]] = `<a target=\"blank\" href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexED[cardListUnitedHyatt[3]] = `<a target=\"blank\" href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexED[cardListAlaskaMarriott[3]] = `<a target=\"blank\" href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmexED[cardListAmericanMarriott[3]] = `<a target=\"blank\" href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmexED[cardListDeltaMarriott[3]] = `<a target=\"blank\" href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmexED[cardListJetBlueMarriott[3]] = `<a target=\"blank\" href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmexED[cardListSouthwestMarriott[3]] = `<a target=\"blank\" href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmexED[cardListUnitedMarriott[3]] = `<a target=\"blank\" href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCardsAmexEDP[cardListAlaskaIHG[4]] = `<a target=\"blank\" href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexEDP[cardListAmericanIHG[4]] = `<a target=\"blank\" href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexEDP[cardListDeltaIHG[4]] = `<a target=\"blank\" href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexEDP[cardListJetBlueIHG[4]] = `<a target=\"blank\" href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexEDP[cardListSouthwestIHG[4]] = `<a target=\"blank\" href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexEDP[cardListUnitedIHG[4]] = `<a target=\"blank\" href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexEDP[cardListAlaskaHilton[4]] = `<a target=\"blank\" href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexEDP[cardListAmericanHilton[4]] = `<a target=\"blank\" href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexEDP[cardListDeltaHilton[4]] = `<a target=\"blank\" href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexEDP[cardListJetBlueHilton[4]] = `<a target=\"blank\" href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexEDP[cardListSouthwestHilton[4]] = `<a target=\"blank\" href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexEDP[cardListUnitedHilton[4]] = `<a target=\"blank\" href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexEDP[cardListAlaskaHyatt[4]] = `<a target=\"blank\" href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexEDP[cardListAmericanHyatt[4]] = `<a target=\"blank\" href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexEDP[cardListDeltaHyatt[4]] = `<a target=\"blank\" href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexEDP[cardListJetBlueHyatt[4]] = `<a target=\"blank\" href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexEDP[cardListSouthwestHyatt[4]] = `<a target=\"blank\" href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexEDP[cardListUnitedHyatt[4]] = `<a target=\"blank\" href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexEDP[cardListAlaskaMarriott[4]] = `<a target=\"blank\" href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmexEDP[cardListAmericanMarriott[4]] = `<a target=\"blank\" href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmexEDP[cardListDeltaMarriott[4]] = `<a target=\"blank\" href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmexEDP[cardListJetBlueMarriott[4]] = `<a target=\"blank\" href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmexEDP[cardListSouthwestMarriott[4]] = `<a target=\"blank\" href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmexEDP[cardListUnitedMarriott[4]] = `<a target=\"blank\" href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCardsAmexBlue[cardListAlaskaIHG[5]] = `<a target=\"blank\" href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexBlue[cardListAmericanIHG[5]] = `<a target=\"blank\" href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexBlue[cardListDeltaIHG[5]] = `<a target=\"blank\" href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexBlue[cardListJetBlueIHG[5]] = `<a target=\"blank\" href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexBlue[cardListSouthwestIHG[5]] = `<a target=\"blank\" href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexBlue[cardListUnitedIHG[5]] = `<a target=\"blank\" href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmexBlue[cardListAlaskaHilton[5]] = `<a target=\"blank\" href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexBlue[cardListAmericanHilton[5]] = `<a target=\"blank\" href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexBlue[cardListDeltaHilton[5]] = `<a target=\"blank\" href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexBlue[cardListJetBlueHilton[5]] = `<a target=\"blank\" href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexBlue[cardListSouthwestHilton[5]] = `<a target=\"blank\" href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexBlue[cardListUnitedHilton[5]] = `<a target=\"blank\" href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmexBlue[cardListAlaskaHyatt[5]] = `<a target=\"blank\" href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexBlue[cardListAmericanHyatt[5]] = `<a target=\"blank\" href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexBlue[cardListDeltaHyatt[5]] = `<a target=\"blank\" href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexBlue[cardListJetBlueHyatt[5]] = `<a target=\"blank\" href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexBlue[cardListSouthwestHyatt[5]] = `<a target=\"blank\" href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexBlue[cardListUnitedHyatt[5]] = `<a target=\"blank\" href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmexBlue[cardListAlaskaMarriott[5]] = `<a target=\"blank\" href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmexBlue[cardListAmericanMarriott[5]] = `<a target=\"blank\" href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmexBlue[cardListDeltaMarriott[5]] = `<a target=\"blank\" href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmexBlue[cardListJetBlueMarriott[5]] = `<a target=\"blank\" href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmexBlue[cardListSouthwestMarriott[5]] = `<a target=\"blank\" href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmexBlue[cardListUnitedMarriott[5]] = `<a target=\"blank\" href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCardsDeltaBlue[cardListAlaskaIHG[6]] = `<a target=\"blank\" href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsDeltaBlue[cardListAmericanIHG[6]] = `<a target=\"blank\" href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsDeltaBlue[cardListDeltaIHG[6]] = `<a target=\"blank\" href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsDeltaBlue[cardListJetBlueIHG[6]] = `<a target=\"blank\" href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsDeltaBlue[cardListSouthwestIHG[6]] = `<a target=\"blank\" href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsDeltaBlue[cardListUnitedIHG[6]] = `<a target=\"blank\" href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsDeltaBlue[cardListAlaskaHilton[6]] = `<a target=\"blank\" href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsDeltaBlue[cardListAmericanHilton[6]] = `<a target=\"blank\" href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsDeltaBlue[cardListDeltaHilton[6]] = `<a target=\"blank\" href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsDeltaBlue[cardListJetBlueHilton[6]] = `<a target=\"blank\" href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsDeltaBlue[cardListSouthwestHilton[6]] = `<a target=\"blank\" href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsDeltaBlue[cardListUnitedHilton[6]] = `<a target=\"blank\" href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsDeltaBlue[cardListAlaskaHyatt[6]] = `<a target=\"blank\" href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsDeltaBlue[cardListAmericanHyatt[6]] = `<a target=\"blank\" href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsDeltaBlue[cardListDeltaHyatt[6]] = `<a target=\"blank\" href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsDeltaBlue[cardListJetBlueHyatt[6]] = `<a target=\"blank\" href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsDeltaBlue[cardListSouthwestHyatt[6]] = `<a target=\"blank\" href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsDeltaBlue[cardListUnitedHyatt[6]] = `<a target=\"blank\" href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsDeltaBlue[cardListAlaskaMarriott[6]] = `<a target=\"blank\" href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsDeltaBlue[cardListAmericanMarriott[6]] = `<a target=\"blank\" href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsDeltaBlue[cardListDeltaMarriott[6]] = `<a target=\"blank\" href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsDeltaBlue[cardListJetBlueMarriott[6]] = `<a target=\"blank\" href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsDeltaBlue[cardListSouthwestMarriott[6]] = `<a target=\"blank\" href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsDeltaBlue[cardListUnitedMarriott[6]] = `<a target=\"blank\" href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCardsDeltaGold[cardListAlaskaIHG[7]] = `<a target=\"blank\" href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsDeltaGold[cardListAmericanIHG[7]] = `<a target=\"blank\" href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsDeltaGold[cardListDeltaIHG[7]] = `<a target=\"blank\" href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsDeltaGold[cardListJetBlueIHG[7]] = `<a target=\"blank\" href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsDeltaGold[cardListSouthwestIHG[7]] = `<a target=\"blank\" href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsDeltaGold[cardListUnitedIHG[7]] = `<a target=\"blank\" href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsDeltaGold[cardListAlaskaHilton[7]] = `<a target=\"blank\" href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsDeltaGold[cardListAmericanHilton[7]] = `<a target=\"blank\" href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsDeltaGold[cardListDeltaHilton[7]] = `<a target=\"blank\" href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsDeltaGold[cardListJetBlueHilton[7]] = `<a target=\"blank\" href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsDeltaGold[cardListSouthwestHilton[7]] = `<a target=\"blank\" href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsDeltaGold[cardListUnitedHilton[7]] = `<a target=\"blank\" href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsDeltaGold[cardListAlaskaHyatt[7]] = `<a target=\"blank\" href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsDeltaGold[cardListAmericanHyatt[7]] = `<a target=\"blank\" href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsDeltaGold[cardListDeltaHyatt[7]] = `<a target=\"blank\" href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsDeltaGold[cardListJetBlueHyatt[7]] = `<a target=\"blank\" href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsDeltaGold[cardListSouthwestHyatt[7]] = `<a target=\"blank\" href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsDeltaGold[cardListUnitedHyatt[7]] = `<a target=\"blank\" href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsDeltaGold[cardListAlaskaMarriott[7]] = `<a target=\"blank\" href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsDeltaGold[cardListAmericanMarriott[7]] = `<a target=\"blank\" href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsDeltaGold[cardListDeltaMarriott[7]] = `<a target=\"blank\" href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsDeltaGold[cardListJetBlueMarriott[7]] = `<a target=\"blank\" href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsDeltaGold[cardListSouthwestMarriott[7]] = `<a target=\"blank\" href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsDeltaGold[cardListUnitedMarriott[7]] = `<a target=\"blank\" href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCardsDeltaPlat[cardListAlaskaIHG[8]] = `<a target=\"blank\" href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsDeltaPlat[cardListAmericanIHG[8]] = `<a target=\"blank\" href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsDeltaPlat[cardListDeltaIHG[8]] = `<a target=\"blank\" href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsDeltaPlat[cardListJetBlueIHG[8]] = `<a target=\"blank\" href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsDeltaPlat[cardListSouthwestIHG[8]] = `<a target=\"blank\" href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsDeltaPlat[cardListUnitedIHG[8]] = `<a target=\"blank\" href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsDeltaPlat[cardListAlaskaHilton[8]] = `<a target=\"blank\" href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsDeltaPlat[cardListAmericanHilton[8]] = `<a target=\"blank\" href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsDeltaPlat[cardListDeltaHilton[8]] = `<a target=\"blank\" href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsDeltaPlat[cardListJetBlueHilton[8]] = `<a target=\"blank\" href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsDeltaPlat[cardListSouthwestHilton[8]] = `<a target=\"blank\" href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsDeltaPlat[cardListUnitedHilton[8]] = `<a target=\"blank\" href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsDeltaPlat[cardListAlaskaHyatt[8]] = `<a target=\"blank\" href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsDeltaPlat[cardListAmericanHyatt[8]] = `<a target=\"blank\" href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsDeltaPlat[cardListDeltaHyatt[8]] = `<a target=\"blank\" href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsDeltaPlat[cardListJetBlueHyatt[8]] = `<a target=\"blank\" href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsDeltaPlat[cardListSouthwestHyatt[8]] = `<a target=\"blank\" href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsDeltaPlat[cardListUnitedHyatt[8]] = `<a target=\"blank\" href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsDeltaPlat[cardListAlaskaMarriott[8]] = `<a target=\"blank\" href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsDeltaPlat[cardListAmericanMarriott[8]] = `<a target=\"blank\" href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsDeltaPlat[cardListDeltaMarriott[8]] = `<a target=\"blank\" href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsDeltaPlat[cardListJetBlueMarriott[8]] = `<a target=\"blank\" href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsDeltaPlat[cardListSouthwestMarriott[8]] = `<a target=\"blank\" href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsDeltaPlat[cardListUnitedMarriott[8]] = `<a target=\"blank\" href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCardsDeltaRes[cardListAlaskaIHG[9]] = `<a target=\"blank\" href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsDeltaRes[cardListAmericanIHG[9]] = `<a target=\"blank\" href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsDeltaRes[cardListDeltaIHG[9]] = `<a target=\"blank\" href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsDeltaRes[cardListJetBlueIHG[9]] = `<a target=\"blank\" href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsDeltaRes[cardListSouthwestIHG[9]] = `<a target=\"blank\" href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsDeltaRes[cardListUnitedIHG[9]] = `<a target=\"blank\" href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsDeltaRes[cardListAlaskaHilton[9]] = `<a target=\"blank\" href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsDeltaRes[cardListAmericanHilton[9]] = `<a target=\"blank\" href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsDeltaRes[cardListDeltaHilton[9]] = `<a target=\"blank\" href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsDeltaRes[cardListJetBlueHilton[9]] = `<a target=\"blank\" href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsDeltaRes[cardListSouthwestHilton[9]] = `<a target=\"blank\" href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsDeltaRes[cardListUnitedHilton[9]] = `<a target=\"blank\" href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsDeltaRes[cardListAlaskaHyatt[9]] = `<a target=\"blank\" href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsDeltaRes[cardListAmericanHyatt[9]] = `<a target=\"blank\" href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsDeltaRes[cardListDeltaHyatt[9]] = `<a target=\"blank\" href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsDeltaRes[cardListJetBlueHyatt[9]] = `<a target=\"blank\" href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsDeltaRes[cardListSouthwestHyatt[9]] = `<a target=\"blank\" href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsDeltaRes[cardListUnitedHyatt[9]] = `<a target=\"blank\" href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsDeltaRes[cardListAlaskaMarriott[9]] = `<a target=\"blank\" href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsDeltaRes[cardListAmericanMarriott[9]] = `<a target=\"blank\" href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsDeltaRes[cardListDeltaMarriott[9]] = `<a target=\"blank\" href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsDeltaRes[cardListJetBlueMarriott[9]] = `<a target=\"blank\" href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsDeltaRes[cardListSouthwestMarriott[9]] = `<a target=\"blank\" href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsDeltaRes[cardListUnitedMarriott[9]] = `<a target=\"blank\" href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCardsHilHon[cardListAlaskaIHG[10]] = `<a target=\"blank\" href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsHilHon[cardListAmericanIHG[10]] = `<a target=\"blank\" href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsHilHon[cardListDeltaIHG[10]] = `<a target=\"blank\" href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsHilHon[cardListJetBlueIHG[10]] = `<a target=\"blank\" href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsHilHon[cardListSouthwestIHG[10]] = `<a target=\"blank\" href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsHilHon[cardListUnitedIHG[10]] = `<a target=\"blank\" href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsHilHon[cardListAlaskaHilton[10]] = `<a target=\"blank\" href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsHilHon[cardListAmericanHilton[10]] = `<a target=\"blank\" href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsHilHon[cardListDeltaHilton[10]] = `<a target=\"blank\" href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsHilHon[cardListJetBlueHilton[10]] = `<a target=\"blank\" href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsHilHon[cardListSouthwestHilton[10]] = `<a target=\"blank\" href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsHilHon[cardListUnitedHilton[10]] = `<a target=\"blank\" href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsHilHon[cardListAlaskaHyatt[10]] = `<a target=\"blank\" href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsHilHon[cardListAmericanHyatt[10]] = `<a target=\"blank\" href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsHilHon[cardListDeltaHyatt[10]] = `<a target=\"blank\" href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsHilHon[cardListJetBlueHyatt[10]] = `<a target=\"blank\" href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsHilHon[cardListSouthwestHyatt[10]] = `<a target=\"blank\" href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsHilHon[cardListUnitedHyatt[10]] = `<a target=\"blank\" href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsHilHon[cardListAlaskaMarriott[10]] = `<a target=\"blank\" href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsHilHon[cardListAmericanMarriott[10]] = `<a target=\"blank\" href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsHilHon[cardListDeltaMarriott[10]] = `<a target=\"blank\" href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsHilHon[cardListJetBlueMarriott[10]] = `<a target=\"blank\" href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsHilHon[cardListSouthwestMarriott[10]] = `<a target=\"blank\" href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsHilHon[cardListUnitedMarriott[10]] = `<a target=\"blank\" href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCardsHilSur[cardListAlaskaIHG[11]] = `<a target=\"blank\" href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsHilSur[cardListAmericanIHG[11]] = `<a target=\"blank\" href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsHilSur[cardListDeltaIHG[11]] = `<a target=\"blank\" href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsHilSur[cardListJetBlueIHG[11]] = `<a target=\"blank\" href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsHilSur[cardListSouthwestIHG[11]] = `<a target=\"blank\" href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsHilSur[cardListUnitedIHG[11]] = `<a target=\"blank\" href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsHilSur[cardListAlaskaHilton[11]] = `<a target=\"blank\" href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsHilSur[cardListAmericanHilton[11]] = `<a target=\"blank\" href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsHilSur[cardListDeltaHilton[11]] = `<a target=\"blank\" href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsHilSur[cardListJetBlueHilton[11]] = `<a target=\"blank\" href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsHilSur[cardListSouthwestHilton[11]] = `<a target=\"blank\" href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsHilSur[cardListUnitedHilton[11]] = `<a target=\"blank\" href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsHilSur[cardListAlaskaHyatt[11]] = `<a target=\"blank\" href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsHilSur[cardListAmericanHyatt[11]] = `<a target=\"blank\" href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsHilSur[cardListDeltaHyatt[11]] = `<a target=\"blank\" href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsHilSur[cardListJetBlueHyatt[11]] = `<a target=\"blank\" href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsHilSur[cardListSouthwestHyatt[11]] = `<a target=\"blank\" href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsHilSur[cardListUnitedHyatt[11]] = `<a target=\"blank\" href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsHilSur[cardListAlaskaMarriott[11]] = `<a target=\"blank\" href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsHilSur[cardListAmericanMarriott[11]] = `<a target=\"blank\" href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsHilSur[cardListDeltaMarriott[11]] = `<a target=\"blank\" href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsHilSur[cardListJetBlueMarriott[11]] = `<a target=\"blank\" href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsHilSur[cardListSouthwestMarriott[11]] = `<a target=\"blank\" href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsHilSur[cardListUnitedMarriott[11]] = `<a target=\"blank\" href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCardsHilAsp[cardListAlaskaIHG[12]] = `<a target=\"blank\" href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsHilAsp[cardListAmericanIHG[12]] = `<a target=\"blank\" href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsHilAsp[cardListDeltaIHG[12]] = `<a target=\"blank\" href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsHilAsp[cardListJetBlueIHG[12]] = `<a target=\"blank\" href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsHilAsp[cardListSouthwestIHG[12]] = `<a target=\"blank\" href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsHilAsp[cardListUnitedIHG[12]] = `<a target=\"blank\" href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsHilAsp[cardListAlaskaHilton[12]] = `<a target=\"blank\" href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsHilAsp[cardListAmericanHilton[12]] = `<a target=\"blank\" href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsHilAsp[cardListDeltaHilton[12]] = `<a target=\"blank\" href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsHilAsp[cardListJetBlueHilton[12]] = `<a target=\"blank\" href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsHilAsp[cardListSouthwestHilton[12]] = `<a target=\"blank\" href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsHilAsp[cardListUnitedHilton[12]] = `<a target=\"blank\" href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsHilAsp[cardListAlaskaHyatt[12]] = `<a target=\"blank\" href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsHilAsp[cardListAmericanHyatt[12]] = `<a target=\"blank\" href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsHilAsp[cardListDeltaHyatt[12]] = `<a target=\"blank\" href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsHilAsp[cardListJetBlueHyatt[12]] = `<a target=\"blank\" href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsHilAsp[cardListSouthwestHyatt[12]] = `<a target=\"blank\" href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsHilAsp[cardListUnitedHyatt[12]] = `<a target=\"blank\" href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsHilAsp[cardListAlaskaMarriott[12]] = `<a target=\"blank\" href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsHilAsp[cardListAmericanMarriott[12]] = `<a target=\"blank\" href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsHilAsp[cardListDeltaMarriott[12]] = `<a target=\"blank\" href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsHilAsp[cardListJetBlueMarriott[12]] = `<a target=\"blank\" href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsHilAsp[cardListSouthwestMarriott[12]] = `<a target=\"blank\" href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsHilAsp[cardListUnitedMarriott[12]] = `<a target=\"blank\" href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCardsMarBold[cardListAlaskaIHG[13]] = `<a target=\"blank\" href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsMarBold[cardListAmericanIHG[13]] = `<a target=\"blank\" href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsMarBold[cardListDeltaIHG[13]] = `<a target=\"blank\" href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsMarBold[cardListJetBlueIHG[13]] = `<a target=\"blank\" href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsMarBold[cardListSouthwestIHG[13]] = `<a target=\"blank\" href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsMarBold[cardListUnitedIHG[13]] = `<a target=\"blank\" href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsMarBold[cardListAlaskaHilton[13]] = `<a target=\"blank\" href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsMarBold[cardListAmericanHilton[13]] = `<a target=\"blank\" href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsMarBold[cardListDeltaHilton[13]] = `<a target=\"blank\" href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsMarBold[cardListJetBlueHilton[13]] = `<a target=\"blank\" href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsMarBold[cardListSouthwestHilton[13]] = `<a target=\"blank\" href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsMarBold[cardListUnitedHilton[13]] = `<a target=\"blank\" href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsMarBold[cardListAlaskaHyatt[13]] = `<a target=\"blank\" href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsMarBold[cardListAmericanHyatt[13]] = `<a target=\"blank\" href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsMarBold[cardListDeltaHyatt[13]] = `<a target=\"blank\" href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsMarBold[cardListJetBlueHyatt[13]] = `<a target=\"blank\" href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsMarBold[cardListSouthwestHyatt[13]] = `<a target=\"blank\" href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsMarBold[cardListUnitedHyatt[13]] = `<a target=\"blank\" href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsMarBold[cardListAlaskaMarriott[13]] = `<a target=\"blank\" href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsMarBold[cardListAmericanMarriott[13]] = `<a target=\"blank\" href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsMarBold[cardListDeltaMarriott[13]] = `<a target=\"blank\" href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsMarBold[cardListJetBlueMarriott[13]] = `<a target=\"blank\" href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsMarBold[cardListSouthwestMarriott[13]] = `<a target=\"blank\" href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsMarBold[cardListUnitedMarriott[13]] = `<a target=\"blank\" href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCardsMarBound[cardListAlaskaIHG[14]] = `<a target=\"blank\" href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsMarBound[cardListAmericanIHG[14]] = `<a target=\"blank\" href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsMarBound[cardListDeltaIHG[14]] = `<a target=\"blank\" href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsMarBound[cardListJetBlueIHG[14]] = `<a target=\"blank\" href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsMarBound[cardListSouthwestIHG[14]] = `<a target=\"blank\" href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsMarBound[cardListUnitedIHG[14]] = `<a target=\"blank\" href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsMarBound[cardListAlaskaHilton[14]] = `<a target=\"blank\" href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsMarBound[cardListAmericanHilton[14]] = `<a target=\"blank\" href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsMarBound[cardListDeltaHilton[14]] = `<a target=\"blank\" href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsMarBound[cardListJetBlueHilton[14]] = `<a target=\"blank\" href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsMarBound[cardListSouthwestHilton[14]] = `<a target=\"blank\" href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsMarBound[cardListUnitedHilton[14]] = `<a target=\"blank\" href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsMarBound[cardListAlaskaHyatt[14]] = `<a target=\"blank\" href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsMarBound[cardListAmericanHyatt[14]] = `<a target=\"blank\" href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsMarBound[cardListDeltaHyatt[14]] = `<a target=\"blank\" href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsMarBound[cardListJetBlueHyatt[14]] = `<a target=\"blank\" href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsMarBound[cardListSouthwestHyatt[14]] = `<a target=\"blank\" href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsMarBound[cardListUnitedHyatt[14]] = `<a target=\"blank\" href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsMarBound[cardListAlaskaMarriott[14]] = `<a target=\"blank\" href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsMarBound[cardListAmericanMarriott[14]] = `<a target=\"blank\" href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsMarBound[cardListDeltaMarriott[14]] = `<a target=\"blank\" href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsMarBound[cardListJetBlueMarriott[14]] = `<a target=\"blank\" href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsMarBound[cardListSouthwestMarriott[14]] = `<a target=\"blank\" href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsMarBound[cardListUnitedMarriott[14]] = `<a target=\"blank\" href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCardsMarBril[cardListAlaskaIHG[15]] = `<a target=\"blank\" href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsMarBril[cardListAmericanIHG[15]] = `<a target=\"blank\" href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsMarBril[cardListDeltaIHG[15]] = `<a target=\"blank\" href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsMarBril[cardListJetBlueIHG[15]] = `<a target=\"blank\" href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsMarBril[cardListSouthwestIHG[15]] = `<a target=\"blank\" href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsMarBril[cardListUnitedIHG[15]] = `<a target=\"blank\" href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsMarBril[cardListAlaskaHilton[15]] = `<a target=\"blank\" href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsMarBril[cardListAmericanHilton[15]] = `<a target=\"blank\" href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsMarBril[cardListDeltaHilton[15]] = `<a target=\"blank\" href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsMarBril[cardListJetBlueHilton[15]] = `<a target=\"blank\" href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsMarBril[cardListSouthwestHilton[15]] = `<a target=\"blank\" href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsMarBril[cardListUnitedHilton[15]] = `<a target=\"blank\" href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsMarBril[cardListAlaskaHyatt[15]] = `<a target=\"blank\" href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsMarBril[cardListAmericanHyatt[15]] = `<a target=\"blank\" href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsMarBril[cardListDeltaHyatt[15]] = `<a target=\"blank\" href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsMarBril[cardListJetBlueHyatt[15]] = `<a target=\"blank\" href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsMarBril[cardListSouthwestHyatt[15]] = `<a target=\"blank\" href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsMarBril[cardListUnitedHyatt[15]] = `<a target=\"blank\" href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsMarBril[cardListAlaskaMarriott[15]] = `<a target=\"blank\" href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsMarBril[cardListAmericanMarriott[15]] = `<a target=\"blank\" href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsMarBril[cardListDeltaMarriott[15]] = `<a target=\"blank\" href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsMarBril[cardListJetBlueMarriott[15]] = `<a target=\"blank\" href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsMarBril[cardListSouthwestMarriott[15]] = `<a target=\"blank\" href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsMarBril[cardListUnitedMarriott[15]] = `<a target=\"blank\" href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCardsChaseSapPref[cardListAlaskaIHG[16]] = `<a target=\"blank\" href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsChaseSapPref[cardListAmericanIHG[16]] = `<a target=\"blank\" href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsChaseSapPref[cardListDeltaIHG[16]] = `<a target=\"blank\" href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsChaseSapPref[cardListJetBlueIHG[16]] = `<a target=\"blank\" href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsChaseSapPref[cardListSouthwestIHG[16]] = `<a target=\"blank\" href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsChaseSapPref[cardListUnitedIHG[16]] = `<a target=\"blank\" href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsChaseSapPref[cardListAlaskaHilton[16]] = `<a target=\"blank\" href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsChaseSapPref[cardListAmericanHilton[16]] = `<a target=\"blank\" href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsChaseSapPref[cardListDeltaHilton[16]] = `<a target=\"blank\" href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsChaseSapPref[cardListJetBlueHilton[16]] = `<a target=\"blank\" href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsChaseSapPref[cardListSouthwestHilton[16]] = `<a target=\"blank\" href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsChaseSapPref[cardListUnitedHilton[16]] = `<a target=\"blank\" href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsChaseSapPref[cardListAlaskaHyatt[16]] = `<a target=\"blank\" href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsChaseSapPref[cardListAmericanHyatt[16]] = `<a target=\"blank\" href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsChaseSapPref[cardListDeltaHyatt[16]] = `<a target=\"blank\" href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsChaseSapPref[cardListJetBlueHyatt[16]] = `<a target=\"blank\" href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsChaseSapPref[cardListSouthwestHyatt[16]] = `<a target=\"blank\" href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsChaseSapPref[cardListUnitedHyatt[16]] = `<a target=\"blank\" href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsChaseSapPref[cardListAlaskaMarriott[16]] = `<a target=\"blank\" href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsChaseSapPref[cardListAmericanMarriott[16]] = `<a target=\"blank\" href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsChaseSapPref[cardListDeltaMarriott[16]] = `<a target=\"blank\" href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsChaseSapPref[cardListJetBlueMarriott[16]] = `<a target=\"blank\" href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsChaseSapPref[cardListSouthwestMarriott[16]] = `<a target=\"blank\" href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsChaseSapPref[cardListUnitedMarriott[16]] = `<a target=\"blank\" href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCardsChaseSapRes[cardListAlaskaIHG[17]] = `<a target=\"blank\" href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsChaseSapRes[cardListAmericanIHG[17]] = `<a target=\"blank\" href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsChaseSapRes[cardListDeltaIHG[17]] = `<a target=\"blank\" href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsChaseSapRes[cardListJetBlueIHG[17]] = `<a target=\"blank\" href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsChaseSapRes[cardListSouthwestIHG[17]] = `<a target=\"blank\" href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsChaseSapRes[cardListUnitedIHG[17]] = `<a target=\"blank\" href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsChaseSapRes[cardListAlaskaHilton[17]] = `<a target=\"blank\" href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsChaseSapRes[cardListAmericanHilton[17]] = `<a target=\"blank\" href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsChaseSapRes[cardListDeltaHilton[17]] = `<a target=\"blank\" href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsChaseSapRes[cardListJetBlueHilton[17]] = `<a target=\"blank\" href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsChaseSapRes[cardListSouthwestHilton[17]] = `<a target=\"blank\" href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsChaseSapRes[cardListUnitedHilton[17]] = `<a target=\"blank\" href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsChaseSapRes[cardListAlaskaHyatt[17]] = `<a target=\"blank\" href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsChaseSapRes[cardListAmericanHyatt[17]] = `<a target=\"blank\" href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsChaseSapRes[cardListDeltaHyatt[17]] = `<a target=\"blank\" href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsChaseSapRes[cardListJetBlueHyatt[17]] = `<a target=\"blank\" href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsChaseSapRes[cardListSouthwestHyatt[17]] = `<a target=\"blank\" href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsChaseSapRes[cardListUnitedHyatt[17]] = `<a target=\"blank\" href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsChaseSapRes[cardListAlaskaMarriott[17]] = `<a target=\"blank\" href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsChaseSapRes[cardListAmericanMarriott[17]] = `<a target=\"blank\" href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsChaseSapRes[cardListDeltaMarriott[17]] = `<a target=\"blank\" href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsChaseSapRes[cardListJetBlueMarriott[17]] = `<a target=\"blank\" href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsChaseSapRes[cardListSouthwestMarriott[17]] = `<a target=\"blank\" href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsChaseSapRes[cardListUnitedMarriott[17]] = `<a target=\"blank\" href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCardsSWPlus[cardListAlaskaIHG[18]] = `<a target=\"blank\" href=\"${southwestPlusLink}\">Southwest Rapid Rewards® Plus Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsSWPlus[cardListAmericanIHG[18]] = `<a target=\"blank\" href=\"${southwestPlusLink}\">Southwest Rapid Rewards® Plus Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsSWPlus[cardListDeltaIHG[18]] = `<a target=\"blank\" href=\"${southwestPlusLink}\">Southwest Rapid Rewards® Plus Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsSWPlus[cardListJetBlueIHG[18]] = `<a target=\"blank\" href=\"${southwestPlusLink}\">Southwest Rapid Rewards® Plus Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsSWPlus[cardListSouthwestIHG[18]] = `<a target=\"blank\" href=\"${southwestPlusLink}\">Southwest Rapid Rewards® Plus Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsSWPlus[cardListUnitedIHG[18]] = `<a target=\"blank\" href=\"${southwestPlusLink}\">Southwest Rapid Rewards® Plus Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsSWPlus[cardListAlaskaHilton[18]] = `<a target=\"blank\" href=\"${southwestPlusLink}\">Southwest Rapid Rewards® Plus Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsSWPlus[cardListAmericanHilton[18]] = `<a target=\"blank\" href=\"${southwestPlusLink}\">Southwest Rapid Rewards® Plus Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsSWPlus[cardListDeltaHilton[18]] = `<a target=\"blank\" href=\"${southwestPlusLink}\">Southwest Rapid Rewards® Plus Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsSWPlus[cardListJetBlueHilton[18]] = `<a target=\"blank\" href=\"${southwestPlusLink}\">Southwest Rapid Rewards® Plus Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsSWPlus[cardListSouthwestHilton[18]] = `<a target=\"blank\" href=\"${southwestPlusLink}\">Southwest Rapid Rewards® Plus Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsSWPlus[cardListUnitedHilton[18]] = `<a target=\"blank\" href=\"${southwestPlusLink}\">Southwest Rapid Rewards® Plus Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsSWPlus[cardListAlaskaHyatt[18]] = `<a target=\"blank\" href=\"${southwestPlusLink}\">Southwest Rapid Rewards® Plus Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsSWPlus[cardListAmericanHyatt[18]] = `<a target=\"blank\" href=\"${southwestPlusLink}\">Southwest Rapid Rewards® Plus Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsSWPlus[cardListDeltaHyatt[18]] = `<a target=\"blank\" href=\"${southwestPlusLink}\">Southwest Rapid Rewards® Plus Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsSWPlus[cardListJetBlueHyatt[18]] = `<a target=\"blank\" href=\"${southwestPlusLink}\">Southwest Rapid Rewards® Plus Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsSWPlus[cardListSouthwestHyatt[18]] = `<a target=\"blank\" href=\"${southwestPlusLink}\">Southwest Rapid Rewards® Plus Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsSWPlus[cardListUnitedHyatt[18]] = `<a target=\"blank\" href=\"${southwestPlusLink}\">Southwest Rapid Rewards® Plus Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsSWPlus[cardListAlaskaMarriott[18]] = `<a target=\"blank\" href=\"${southwestPlusLink}\">Southwest Rapid Rewards® Plus Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsSWPlus[cardListAmericanMarriott[18]] = `<a target=\"blank\" href=\"${southwestPlusLink}\">Southwest Rapid Rewards® Plus Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsSWPlus[cardListDeltaMarriott[18]] = `<a target=\"blank\" href=\"${southwestPlusLink}\">Southwest Rapid Rewards® Plus Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsSWPlus[cardListJetBlueMarriott[18]] = `<a target=\"blank\" href=\"${southwestPlusLink}\">Southwest Rapid Rewards® Plus Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsSWPlus[cardListSouthwestMarriott[18]] = `<a target=\"blank\" href=\"${southwestPlusLink}\">Southwest Rapid Rewards® Plus Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsSWPlus[cardListUnitedMarriott[18]] = `<a target=\"blank\" href=\"${southwestPlusLink}\">Southwest Rapid Rewards® Plus Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCardsSWPri[cardListAlaskaIHG[19]] = `<a target=\"blank\" href=\"${southwestPriorityLink}\">Southwest Rapid Rewards® Priority Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsSWPri[cardListAmericanIHG[19]] = `<a target=\"blank\" href=\"${southwestPriorityLink}\">Southwest Rapid Rewards® Priority Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsSWPri[cardListDeltaIHG[19]] = `<a target=\"blank\" href=\"${southwestPriorityLink}\">Southwest Rapid Rewards® Priority Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsSWPri[cardListJetBlueIHG[19]] = `<a target=\"blank\" href=\"${southwestPriorityLink}\">Southwest Rapid Rewards® Priority Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsSWPri[cardListSouthwestIHG[19]] = `<a target=\"blank\" href=\"${southwestPriorityLink}\">Southwest Rapid Rewards® Priority Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsSWPri[cardListUnitedIHG[19]] = `<a target=\"blank\" href=\"${southwestPriorityLink}\">Southwest Rapid Rewards® Priority Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsSWPri[cardListAlaskaHilton[19]] = `<a target=\"blank\" href=\"${southwestPriorityLink}\">Southwest Rapid Rewards® Priority Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsSWPri[cardListAmericanHilton[19]] = `<a target=\"blank\" href=\"${southwestPriorityLink}\">Southwest Rapid Rewards® Priority Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsSWPri[cardListDeltaHilton[19]] = `<a target=\"blank\" href=\"${southwestPriorityLink}\">Southwest Rapid Rewards® Priority Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsSWPri[cardListJetBlueHilton[19]] = `<a target=\"blank\" href=\"${southwestPriorityLink}\">Southwest Rapid Rewards® Priority Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsSWPri[cardListSouthwestHilton[19]] = `<a target=\"blank\" href=\"${southwestPriorityLink}\">Southwest Rapid Rewards® Priority Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsSWPri[cardListUnitedHilton[19]] = `<a target=\"blank\" href=\"${southwestPriorityLink}\">Southwest Rapid Rewards® Priority Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsSWPri[cardListAlaskaHyatt[19]] = `<a target=\"blank\" href=\"${southwestPriorityLink}\">Southwest Rapid Rewards® Priority Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsSWPri[cardListAmericanHyatt[19]] = `<a target=\"blank\" href=\"${southwestPriorityLink}\">Southwest Rapid Rewards® Priority Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsSWPri[cardListDeltaHyatt[19]] = `<a target=\"blank\" href=\"${southwestPriorityLink}\">Southwest Rapid Rewards® Priority Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsSWPri[cardListJetBlueHyatt[19]] = `<a target=\"blank\" href=\"${southwestPriorityLink}\">Southwest Rapid Rewards® Priority Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsSWPri[cardListSouthwestHyatt[19]] = `<a target=\"blank\" href=\"${southwestPriorityLink}\">Southwest Rapid Rewards® Priority Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsSWPri[cardListUnitedHyatt[19]] = `<a target=\"blank\" href=\"${southwestPriorityLink}\">Southwest Rapid Rewards® Priority Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsSWPri[cardListAlaskaMarriott[19]] = `<a target=\"blank\" href=\"${southwestPriorityLink}\">Southwest Rapid Rewards® Priority Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsSWPri[cardListAmericanMarriott[19]] = `<a target=\"blank\" href=\"${southwestPriorityLink}\">Southwest Rapid Rewards® Priority Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsSWPri[cardListDeltaMarriott[19]] = `<a target=\"blank\" href=\"${southwestPriorityLink}\">Southwest Rapid Rewards® Priority Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsSWPri[cardListJetBlueMarriott[19]] = `<a target=\"blank\" href=\"${southwestPriorityLink}\">Southwest Rapid Rewards® Priority Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsSWPri[cardListSouthwestMarriott[19]] = `<a target=\"blank\" href=\"${southwestPriorityLink}\">Southwest Rapid Rewards® Priority Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsSWPri[cardListUnitedMarriott[19]] = `<a target=\"blank\" href=\"${southwestPriorityLink}\">Southwest Rapid Rewards® Priority Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCardsSWPrem[cardListAlaskaIHG[20]] = `<a target=\"blank\" href=\"${southwestPremierLink}\">Southwest Rapid Rewards® Premier Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsSWPrem[cardListAmericanIHG[20]] = `<a target=\"blank\" href=\"${southwestPremierLink}\">Southwest Rapid Rewards® Premier Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsSWPrem[cardListDeltaIHG[20]] = `<a target=\"blank\" href=\"${southwestPremierLink}\">Southwest Rapid Rewards® Premier Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsSWPrem[cardListJetBlueIHG[20]] = `<a target=\"blank\" href=\"${southwestPremierLink}\">Southwest Rapid Rewards® Premier Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsSWPrem[cardListSouthwestIHG[20]] = `<a target=\"blank\" href=\"${southwestPremierLink}\">Southwest Rapid Rewards® Premier Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsSWPrem[cardListUnitedIHG[20]] = `<a target=\"blank\" href=\"${southwestPremierLink}\">Southwest Rapid Rewards® Premier Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsSWPrem[cardListAlaskaHilton[20]] = `<a target=\"blank\" href=\"${southwestPremierLink}\">Southwest Rapid Rewards® Premier Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsSWPrem[cardListAmericanHilton[20]] = `<a target=\"blank\" href=\"${southwestPremierLink}\">Southwest Rapid Rewards® Premier Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsSWPrem[cardListDeltaHilton[20]] = `<a target=\"blank\" href=\"${southwestPremierLink}\">Southwest Rapid Rewards® Premier Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsSWPrem[cardListJetBlueHilton[20]] = `<a target=\"blank\" href=\"${southwestPremierLink}\">Southwest Rapid Rewards® Premier Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsSWPrem[cardListSouthwestHilton[20]] = `<a target=\"blank\" href=\"${southwestPremierLink}\">Southwest Rapid Rewards® Premier Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsSWPrem[cardListUnitedHilton[20]] = `<a target=\"blank\" href=\"${southwestPremierLink}\">Southwest Rapid Rewards® Premier Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsSWPrem[cardListAlaskaHyatt[20]] = `<a target=\"blank\" href=\"${southwestPremierLink}\">Southwest Rapid Rewards® Premier Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsSWPrem[cardListAmericanHyatt[20]] = `<a target=\"blank\" href=\"${southwestPremierLink}\">Southwest Rapid Rewards® Premier Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsSWPrem[cardListDeltaHyatt[20]] = `<a target=\"blank\" href=\"${southwestPremierLink}\">Southwest Rapid Rewards® Premier Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsSWPrem[cardListJetBlueHyatt[20]] = `<a target=\"blank\" href=\"${southwestPremierLink}\">Southwest Rapid Rewards® Premier Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsSWPrem[cardListSouthwestHyatt[20]] = `<a target=\"blank\" href=\"${southwestPremierLink}\">Southwest Rapid Rewards® Premier Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsSWPrem[cardListUnitedHyatt[20]] = `<a target=\"blank\" href=\"${southwestPremierLink}\">Southwest Rapid Rewards® Premier Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsSWPrem[cardListAlaskaMarriott[20]] = `<a target=\"blank\" href=\"${southwestPremierLink}\">Southwest Rapid Rewards® Premier Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsSWPrem[cardListAmericanMarriott[20]] = `<a target=\"blank\" href=\"${southwestPremierLink}\">Southwest Rapid Rewards® Premier Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsSWPrem[cardListDeltaMarriott[20]] = `<a target=\"blank\" href=\"${southwestPremierLink}\">Southwest Rapid Rewards® Premier Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsSWPrem[cardListJetBlueMarriott[20]] = `<a target=\"blank\" href=\"${southwestPremierLink}\">Southwest Rapid Rewards® Premier Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsSWPrem[cardListSouthwestMarriott[20]] = `<a target=\"blank\" href=\"${southwestPremierLink}\">Southwest Rapid Rewards® Premier Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsSWPrem[cardListUnitedMarriott[20]] = `<a target=\"blank\" href=\"${southwestPremierLink}\">Southwest Rapid Rewards® Premier Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCardsUnitedGate[cardListAlaskaIHG[21]] = `<a target=\"blank\" href=\"${unitedGatewayLink}\">United Gateway℠ Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsUnitedGate[cardListAmericanIHG[21]] = `<a target=\"blank\" href=\"${unitedGatewayLink}\">United Gateway℠ Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsUnitedGate[cardListDeltaIHG[21]] = `<a target=\"blank\" href=\"${unitedGatewayLink}\">United Gateway℠ Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsUnitedGate[cardListJetBlueIHG[21]] = `<a target=\"blank\" href=\"${unitedGatewayLink}\">United Gateway℠ Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsUnitedGate[cardListSouthwestIHG[21]] = `<a target=\"blank\" href=\"${unitedGatewayLink}\">United Gateway℠ Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsUnitedGate[cardListUnitedIHG[21]] = `<a target=\"blank\" href=\"${unitedGatewayLink}\">United Gateway℠ Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsUnitedGate[cardListAlaskaHilton[21]] = `<a target=\"blank\" href=\"${unitedGatewayLink}\">United Gateway℠ Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsUnitedGate[cardListAmericanHilton[21]] = `<a target=\"blank\" href=\"${unitedGatewayLink}\">United Gateway℠ Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsUnitedGate[cardListDeltaHilton[21]] = `<a target=\"blank\" href=\"${unitedGatewayLink}\">United Gateway℠ Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsUnitedGate[cardListJetBlueHilton[21]] = `<a target=\"blank\" href=\"${unitedGatewayLink}\">United Gateway℠ Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsUnitedGate[cardListSouthwestHilton[21]] = `<a target=\"blank\" href=\"${unitedGatewayLink}\">United Gateway℠ Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsUnitedGate[cardListUnitedHilton[21]] = `<a target=\"blank\" href=\"${unitedGatewayLink}\">United Gateway℠ Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsUnitedGate[cardListAlaskaHyatt[21]] = `<a target=\"blank\" href=\"${unitedGatewayLink}\">United Gateway℠ Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsUnitedGate[cardListAmericanHyatt[21]] = `<a target=\"blank\" href=\"${unitedGatewayLink}\">United Gateway℠ Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsUnitedGate[cardListDeltaHyatt[21]] = `<a target=\"blank\" href=\"${unitedGatewayLink}\">United Gateway℠ Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsUnitedGate[cardListJetBlueHyatt[21]] = `<a target=\"blank\" href=\"${unitedGatewayLink}\">United Gateway℠ Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsUnitedGate[cardListSouthwestHyatt[21]] = `<a target=\"blank\" href=\"${unitedGatewayLink}\">United Gateway℠ Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsUnitedGate[cardListUnitedHyatt[21]] = `<a target=\"blank\" href=\"${unitedGatewayLink}\">United Gateway℠ Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsUnitedGate[cardListAlaskaMarriott[21]] = `<a target=\"blank\" href=\"${unitedGatewayLink}\">United Gateway℠ Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsUnitedGate[cardListAmericanMarriott[21]] = `<a target=\"blank\" href=\"${unitedGatewayLink}\">United Gateway℠ Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsUnitedGate[cardListDeltaMarriott[21]] = `<a target=\"blank\" href=\"${unitedGatewayLink}\">United Gateway℠ Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsUnitedGate[cardListJetBlueMarriott[21]] = `<a target=\"blank\" href=\"${unitedGatewayLink}\">United Gateway℠ Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsUnitedGate[cardListSouthwestMarriott[21]] = `<a target=\"blank\" href=\"${unitedGatewayLink}\">United Gateway℠ Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsUnitedGate[cardListUnitedMarriott[21]] = `<a target=\"blank\" href=\"${unitedGatewayLink}\">United Gateway℠ Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCardsUnitedExp[cardListAlaskaIHG[22]] = `<a target=\"blank\" href=\"${unitedExplorerLink}\">United℠ Explorer Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsUnitedExp[cardListAmericanIHG[22]] = `<a target=\"blank\" href=\"${unitedExplorerLink}\">United℠ Explorer Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsUnitedExp[cardListDeltaIHG[22]] = `<a target=\"blank\" href=\"${unitedExplorerLink}\">United℠ Explorer Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsUnitedExp[cardListJetBlueIHG[22]] = `<a target=\"blank\" href=\"${unitedExplorerLink}\">United℠ Explorer Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsUnitedExp[cardListSouthwestIHG[22]] = `<a target=\"blank\" href=\"${unitedExplorerLink}\">United℠ Explorer Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsUnitedExp[cardListUnitedIHG[22]] = `<a target=\"blank\" href=\"${unitedExplorerLink}\">United℠ Explorer Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsUnitedExp[cardListAlaskaHilton[22]] = `<a target=\"blank\" href=\"${unitedExplorerLink}\">United℠ Explorer Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsUnitedExp[cardListAmericanHilton[22]] = `<a target=\"blank\" href=\"${unitedExplorerLink}\">United℠ Explorer Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsUnitedExp[cardListDeltaHilton[22]] = `<a target=\"blank\" href=\"${unitedExplorerLink}\">United℠ Explorer Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsUnitedExp[cardListJetBlueHilton[22]] = `<a target=\"blank\" href=\"${unitedExplorerLink}\">United℠ Explorer Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsUnitedExp[cardListSouthwestHilton[22]] = `<a target=\"blank\" href=\"${unitedExplorerLink}\">United℠ Explorer Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsUnitedExp[cardListUnitedHilton[22]] = `<a target=\"blank\" href=\"${unitedExplorerLink}\">United℠ Explorer Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsUnitedExp[cardListAlaskaHyatt[22]] = `<a target=\"blank\" href=\"${unitedExplorerLink}\">United℠ Explorer Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsUnitedExp[cardListAmericanHyatt[22]] = `<a target=\"blank\" href=\"${unitedExplorerLink}\">United℠ Explorer Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsUnitedExp[cardListDeltaHyatt[22]] = `<a target=\"blank\" href=\"${unitedExplorerLink}\">United℠ Explorer Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsUnitedExp[cardListJetBlueHyatt[22]] = `<a target=\"blank\" href=\"${unitedExplorerLink}\">United℠ Explorer Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsUnitedExp[cardListSouthwestHyatt[22]] = `<a target=\"blank\" href=\"${unitedExplorerLink}\">United℠ Explorer Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsUnitedExp[cardListUnitedHyatt[22]] = `<a target=\"blank\" href=\"${unitedExplorerLink}\">United℠ Explorer Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsUnitedExp[cardListAlaskaMarriott[22]] = `<a target=\"blank\" href=\"${unitedExplorerLink}\">United℠ Explorer Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsUnitedExp[cardListAmericanMarriott[22]] = `<a target=\"blank\" href=\"${unitedExplorerLink}\">United℠ Explorer Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsUnitedExp[cardListDeltaMarriott[22]] = `<a target=\"blank\" href=\"${unitedExplorerLink}\">United℠ Explorer Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsUnitedExp[cardListJetBlueMarriott[22]] = `<a target=\"blank\" href=\"${unitedExplorerLink}\">United℠ Explorer Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsUnitedExp[cardListSouthwestMarriott[22]] = `<a target=\"blank\" href=\"${unitedExplorerLink}\">United℠ Explorer Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsUnitedExp[cardListUnitedMarriott[22]] = `<a target=\"blank\" href=\"${unitedExplorerLink}\">United℠ Explorer Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCardsUnitedQuest[cardListAlaskaIHG[23]] = `<a target=\"blank\" href=\"${unitedQuestLink}\">United Quest℠ Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsUnitedQuest[cardListAmericanIHG[23]] = `<a target=\"blank\" href=\"${unitedQuestLink}\">United Quest℠ Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsUnitedQuest[cardListDeltaIHG[23]] = `<a target=\"blank\" href=\"${unitedQuestLink}\">United Quest℠ Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsUnitedQuest[cardListJetBlueIHG[23]] = `<a target=\"blank\" href=\"${unitedQuestLink}\">United Quest℠ Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsUnitedQuest[cardListSouthwestIHG[23]] = `<a target=\"blank\" href=\"${unitedQuestLink}\">United Quest℠ Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsUnitedQuest[cardListUnitedIHG[23]] = `<a target=\"blank\" href=\"${unitedQuestLink}\">United Quest℠ Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsUnitedQuest[cardListAlaskaHilton[23]] = `<a target=\"blank\" href=\"${unitedQuestLink}\">United Quest℠ Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsUnitedQuest[cardListAmericanHilton[23]] = `<a target=\"blank\" href=\"${unitedQuestLink}\">United Quest℠ Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsUnitedQuest[cardListDeltaHilton[23]] = `<a target=\"blank\" href=\"${unitedQuestLink}\">United Quest℠ Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsUnitedQuest[cardListJetBlueHilton[23]] = `<a target=\"blank\" href=\"${unitedQuestLink}\">United Quest℠ Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsUnitedQuest[cardListSouthwestHilton[23]] = `<a target=\"blank\" href=\"${unitedQuestLink}\">United Quest℠ Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsUnitedQuest[cardListUnitedHilton[23]] = `<a target=\"blank\" href=\"${unitedQuestLink}\">United Quest℠ Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsUnitedQuest[cardListAlaskaHyatt[23]] = `<a target=\"blank\" href=\"${unitedQuestLink}\">United Quest℠ Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsUnitedQuest[cardListAmericanHyatt[23]] = `<a target=\"blank\" href=\"${unitedQuestLink}\">United Quest℠ Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsUnitedQuest[cardListDeltaHyatt[23]] = `<a target=\"blank\" href=\"${unitedQuestLink}\">United Quest℠ Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsUnitedQuest[cardListJetBlueHyatt[23]] = `<a target=\"blank\" href=\"${unitedQuestLink}\">United Quest℠ Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsUnitedQuest[cardListSouthwestHyatt[23]] = `<a target=\"blank\" href=\"${unitedQuestLink}\">United Quest℠ Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsUnitedQuest[cardListUnitedHyatt[23]] = `<a target=\"blank\" href=\"${unitedQuestLink}\">United Quest℠ Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsUnitedQuest[cardListAlaskaMarriott[23]] = `<a target=\"blank\" href=\"${unitedQuestLink}\">United Quest℠ Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsUnitedQuest[cardListAmericanMarriott[23]] = `<a target=\"blank\" href=\"${unitedQuestLink}\">United Quest℠ Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsUnitedQuest[cardListDeltaMarriott[23]] = `<a target=\"blank\" href=\"${unitedQuestLink}\">United Quest℠ Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsUnitedQuest[cardListJetBlueMarriott[23]] = `<a target=\"blank\" href=\"${unitedQuestLink}\">United Quest℠ Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsUnitedQuest[cardListSouthwestMarriott[23]] = `<a target=\"blank\" href=\"${unitedQuestLink}\">United Quest℠ Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsUnitedQuest[cardListUnitedMarriott[23]] = `<a target=\"blank\" href=\"${unitedQuestLink}\">United Quest℠ Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCardsUnitedClubInf[cardListAlaskaIHG[24]] = `<a target=\"blank\" href=\"${unitedClubLink}\">United Club℠ Infinite Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsUnitedClubInf[cardListAmericanIHG[24]] = `<a target=\"blank\" href=\"${unitedClubLink}\">United Club℠ Infinite Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsUnitedClubInf[cardListDeltaIHG[24]] = `<a target=\"blank\" href=\"${unitedClubLink}\">United Club℠ Infinite Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsUnitedClubInf[cardListJetBlueIHG[24]] = `<a target=\"blank\" href=\"${unitedClubLink}\">United Club℠ Infinite Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsUnitedClubInf[cardListSouthwestIHG[24]] = `<a target=\"blank\" href=\"${unitedClubLink}\">United Club℠ Infinite Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsUnitedClubInf[cardListUnitedIHG[24]] = `<a target=\"blank\" href=\"${unitedClubLink}\">United Club℠ Infinite Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsUnitedClubInf[cardListAlaskaHilton[24]] = `<a target=\"blank\" href=\"${unitedClubLink}\">United Club℠ Infinite Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsUnitedClubInf[cardListAmericanHilton[24]] = `<a target=\"blank\" href=\"${unitedClubLink}\">United Club℠ Infinite Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsUnitedClubInf[cardListDeltaHilton[24]] = `<a target=\"blank\" href=\"${unitedClubLink}\">United Club℠ Infinite Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsUnitedClubInf[cardListJetBlueHilton[24]] = `<a target=\"blank\" href=\"${unitedClubLink}\">United Club℠ Infinite Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsUnitedClubInf[cardListSouthwestHilton[24]] = `<a target=\"blank\" href=\"${unitedClubLink}\">United Club℠ Infinite Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsUnitedClubInf[cardListUnitedHilton[24]] = `<a target=\"blank\" href=\"${unitedClubLink}\">United Club℠ Infinite Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsUnitedClubInf[cardListAlaskaHyatt[24]] = `<a target=\"blank\" href=\"${unitedClubLink}\">United Club℠ Infinite Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsUnitedClubInf[cardListAmericanHyatt[24]] = `<a target=\"blank\" href=\"${unitedClubLink}\">United Club℠ Infinite Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsUnitedClubInf[cardListDeltaHyatt[24]] = `<a target=\"blank\" href=\"${unitedClubLink}\">United Club℠ Infinite Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsUnitedClubInf[cardListJetBlueHyatt[24]] = `<a target=\"blank\" href=\"${unitedClubLink}\">United Club℠ Infinite Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsUnitedClubInf[cardListSouthwestHyatt[24]] = `<a target=\"blank\" href=\"${unitedClubLink}\">United Club℠ Infinite Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsUnitedClubInf[cardListUnitedHyatt[24]] = `<a target=\"blank\" href=\"${unitedClubLink}\">United Club℠ Infinite Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsUnitedClubInf[cardListAlaskaMarriott[24]] = `<a target=\"blank\" href=\"${unitedClubLink}\">United Club℠ Infinite Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsUnitedClubInf[cardListAmericanMarriott[24]] = `<a target=\"blank\" href=\"${unitedClubLink}\">United Club℠ Infinite Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsUnitedClubInf[cardListDeltaMarriott[24]] = `<a target=\"blank\" href=\"${unitedClubLink}\">United Club℠ Infinite Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsUnitedClubInf[cardListJetBlueMarriott[24]] = `<a target=\"blank\" href=\"${unitedClubLink}\">United Club℠ Infinite Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsUnitedClubInf[cardListSouthwestMarriott[24]] = `<a target=\"blank\" href=\"${unitedClubLink}\">United Club℠ Infinite Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsUnitedClubInf[cardListUnitedMarriott[24]] = `<a target=\"blank\" href=\"${unitedClubLink}\">United Club℠ Infinite Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCardsIHGTrav[cardListAlaskaIHG[25]] = `<a target=\"blank\" href=\"${ihgTravelerLink}\">IHG® Rewards Club Traveler Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsIHGTrav[cardListAmericanIHG[25]] = `<a target=\"blank\" href=\"${ihgTravelerLink}\">IHG® Rewards Club Traveler Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsIHGTrav[cardListDeltaIHG[25]] = `<a target=\"blank\" href=\"${ihgTravelerLink}\">IHG® Rewards Club Traveler Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsIHGTrav[cardListJetBlueIHG[25]] = `<a target=\"blank\" href=\"${ihgTravelerLink}\">IHG® Rewards Club Traveler Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsIHGTrav[cardListSouthwestIHG[25]] = `<a target=\"blank\" href=\"${ihgTravelerLink}\">IHG® Rewards Club Traveler Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsIHGTrav[cardListUnitedIHG[25]] = `<a target=\"blank\" href=\"${ihgTravelerLink}\">IHG® Rewards Club Traveler Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsIHGTrav[cardListAlaskaHilton[25]] = `<a target=\"blank\" href=\"${ihgTravelerLink}\">IHG® Rewards Club Traveler Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsIHGTrav[cardListAmericanHilton[25]] = `<a target=\"blank\" href=\"${ihgTravelerLink}\">IHG® Rewards Club Traveler Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsIHGTrav[cardListDeltaHilton[25]] = `<a target=\"blank\" href=\"${ihgTravelerLink}\">IHG® Rewards Club Traveler Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsIHGTrav[cardListJetBlueHilton[25]] = `<a target=\"blank\" href=\"${ihgTravelerLink}\">IHG® Rewards Club Traveler Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsIHGTrav[cardListSouthwestHilton[25]] = `<a target=\"blank\" href=\"${ihgTravelerLink}\">IHG® Rewards Club Traveler Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsIHGTrav[cardListUnitedHilton[25]] = `<a target=\"blank\" href=\"${ihgTravelerLink}\">IHG® Rewards Club Traveler Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsIHGTrav[cardListAlaskaHyatt[25]] = `<a target=\"blank\" href=\"${ihgTravelerLink}\">IHG® Rewards Club Traveler Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsIHGTrav[cardListAmericanHyatt[25]] = `<a target=\"blank\" href=\"${ihgTravelerLink}\">IHG® Rewards Club Traveler Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsIHGTrav[cardListDeltaHyatt[25]] = `<a target=\"blank\" href=\"${ihgTravelerLink}\">IHG® Rewards Club Traveler Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsIHGTrav[cardListJetBlueHyatt[25]] = `<a target=\"blank\" href=\"${ihgTravelerLink}\">IHG® Rewards Club Traveler Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsIHGTrav[cardListSouthwestHyatt[25]] = `<a target=\"blank\" href=\"${ihgTravelerLink}\">IHG® Rewards Club Traveler Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsIHGTrav[cardListUnitedHyatt[25]] = `<a target=\"blank\" href=\"${ihgTravelerLink}\">IHG® Rewards Club Traveler Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsIHGTrav[cardListAlaskaMarriott[25]] = `<a target=\"blank\" href=\"${ihgTravelerLink}\">IHG® Rewards Club Traveler Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsIHGTrav[cardListAmericanMarriott[25]] = `<a target=\"blank\" href=\"${ihgTravelerLink}\">IHG® Rewards Club Traveler Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsIHGTrav[cardListDeltaMarriott[25]] = `<a target=\"blank\" href=\"${ihgTravelerLink}\">IHG® Rewards Club Traveler Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsIHGTrav[cardListJetBlueMarriott[25]] = `<a target=\"blank\" href=\"${ihgTravelerLink}\">IHG® Rewards Club Traveler Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsIHGTrav[cardListSouthwestMarriott[25]] = `<a target=\"blank\" href=\"${ihgTravelerLink}\">IHG® Rewards Club Traveler Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsIHGTrav[cardListUnitedMarriott[25]] = `<a target=\"blank\" href=\"${ihgTravelerLink}\">IHG® Rewards Club Traveler Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCardsIHGPrem[cardListAlaskaIHG[26]] = `<a target=\"blank\" href=\"${ihgPremierLink}\">IHG® Rewards Club Premier Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsIHGPrem[cardListAmericanIHG[26]] = `<a target=\"blank\" href=\"${ihgPremierLink}\">IHG® Rewards Club Premier Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsIHGPrem[cardListDeltaIHG[26]] = `<a target=\"blank\" href=\"${ihgPremierLink}\">IHG® Rewards Club Premier Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsIHGPrem[cardListJetBlueIHG[26]] = `<a target=\"blank\" href=\"${ihgPremierLink}\">IHG® Rewards Club Premier Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsIHGPrem[cardListSouthwestIHG[26]] = `<a target=\"blank\" href=\"${ihgPremierLink}\">IHG® Rewards Club Premier Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsIHGPrem[cardListUnitedIHG[26]] = `<a target=\"blank\" href=\"${ihgPremierLink}\">IHG® Rewards Club Premier Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsIHGPrem[cardListAlaskaHilton[26]] = `<a target=\"blank\" href=\"${ihgPremierLink}\">IHG® Rewards Club Premier Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsIHGPrem[cardListAmericanHilton[26]] = `<a target=\"blank\" href=\"${ihgPremierLink}\">IHG® Rewards Club Premier Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsIHGPrem[cardListDeltaHilton[26]] = `<a target=\"blank\" href=\"${ihgPremierLink}\">IHG® Rewards Club Premier Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsIHGPrem[cardListJetBlueHilton[26]] = `<a target=\"blank\" href=\"${ihgPremierLink}\">IHG® Rewards Club Premier Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsIHGPrem[cardListSouthwestHilton[26]] = `<a target=\"blank\" href=\"${ihgPremierLink}\">IHG® Rewards Club Premier Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsIHGPrem[cardListUnitedHilton[26]] = `<a target=\"blank\" href=\"${ihgPremierLink}\">IHG® Rewards Club Premier Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsIHGPrem[cardListAlaskaHyatt[26]] = `<a target=\"blank\" href=\"${ihgPremierLink}\">IHG® Rewards Club Premier Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsIHGPrem[cardListAmericanHyatt[26]] = `<a target=\"blank\" href=\"${ihgPremierLink}\">IHG® Rewards Club Premier Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsIHGPrem[cardListDeltaHyatt[26]] = `<a target=\"blank\" href=\"${ihgPremierLink}\">IHG® Rewards Club Premier Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsIHGPrem[cardListJetBlueHyatt[26]] = `<a target=\"blank\" href=\"${ihgPremierLink}\">IHG® Rewards Club Premier Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsIHGPrem[cardListSouthwestHyatt[26]] = `<a target=\"blank\" href=\"${ihgPremierLink}\">IHG® Rewards Club Premier Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsIHGPrem[cardListUnitedHyatt[26]] = `<a target=\"blank\" href=\"${ihgPremierLink}\">IHG® Rewards Club Premier Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsIHGPrem[cardListAlaskaMarriott[26]] = `<a target=\"blank\" href=\"${ihgPremierLink}\">IHG® Rewards Club Premier Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsIHGPrem[cardListAmericanMarriott[26]] = `<a target=\"blank\" href=\"${ihgPremierLink}\">IHG® Rewards Club Premier Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsIHGPrem[cardListDeltaMarriott[26]] = `<a target=\"blank\" href=\"${ihgPremierLink}\">IHG® Rewards Club Premier Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsIHGPrem[cardListJetBlueMarriott[26]] = `<a target=\"blank\" href=\"${ihgPremierLink}\">IHG® Rewards Club Premier Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsIHGPrem[cardListSouthwestMarriott[26]] = `<a target=\"blank\" href=\"${ihgPremierLink}\">IHG® Rewards Club Premier Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsIHGPrem[cardListUnitedMarriott[26]] = `<a target=\"blank\" href=\"${ihgPremierLink}\">IHG® Rewards Club Premier Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCardsHyatt[cardListAlaskaIHG[27]] = `<a target=\"blank\" href=\"${hyattCardLink}\">World of Hyatt Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsHyatt[cardListAmericanIHG[27]] = `<a target=\"blank\" href=\"${hyattCardLink}\">World of Hyatt Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsHyatt[cardListDeltaIHG[27]] = `<a target=\"blank\" href=\"${hyattCardLink}\">World of Hyatt Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsHyatt[cardListJetBlueIHG[27]] = `<a target=\"blank\" href=\"${hyattCardLink}\">World of Hyatt Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsHyatt[cardListSouthwestIHG[27]] = `<a target=\"blank\" href=\"${hyattCardLink}\">World of Hyatt Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsHyatt[cardListUnitedIHG[27]] = `<a target=\"blank\" href=\"${hyattCardLink}\">World of Hyatt Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsHyatt[cardListAlaskaHilton[27]] = `<a target=\"blank\" href=\"${hyattCardLink}\">World of Hyatt Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsHyatt[cardListAmericanHilton[27]] = `<a target=\"blank\" href=\"${hyattCardLink}\">World of Hyatt Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsHyatt[cardListDeltaHilton[27]] = `<a target=\"blank\" href=\"${hyattCardLink}\">World of Hyatt Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsHyatt[cardListJetBlueHilton[27]] = `<a target=\"blank\" href=\"${hyattCardLink}\">World of Hyatt Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsHyatt[cardListSouthwestHilton[27]] = `<a target=\"blank\" href=\"${hyattCardLink}\">World of Hyatt Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsHyatt[cardListUnitedHilton[27]] = `<a target=\"blank\" href=\"${hyattCardLink}\">World of Hyatt Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsHyatt[cardListAlaskaHyatt[27]] = `<a target=\"blank\" href=\"${hyattCardLink}\">World of Hyatt Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsHyatt[cardListAmericanHyatt[27]] = `<a target=\"blank\" href=\"${hyattCardLink}\">World of Hyatt Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsHyatt[cardListDeltaHyatt[27]] = `<a target=\"blank\" href=\"${hyattCardLink}\">World of Hyatt Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsHyatt[cardListJetBlueHyatt[27]] = `<a target=\"blank\" href=\"${hyattCardLink}\">World of Hyatt Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsHyatt[cardListSouthwestHyatt[27]] = `<a target=\"blank\" href=\"${hyattCardLink}\">World of Hyatt Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsHyatt[cardListUnitedHyatt[27]] = `<a target=\"blank\" href=\"${hyattCardLink}\">World of Hyatt Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsHyatt[cardListAlaskaMarriott[27]] = `<a target=\"blank\" href=\"${hyattCardLink}\">World of Hyatt Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsHyatt[cardListAmericanMarriott[27]] = `<a target=\"blank\" href=\"${hyattCardLink}\">World of Hyatt Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsHyatt[cardListDeltaMarriott[27]] = `<a target=\"blank\" href=\"${hyattCardLink}\">World of Hyatt Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsHyatt[cardListJetBlueMarriott[27]] = `<a target=\"blank\" href=\"${hyattCardLink}\">World of Hyatt Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsHyatt[cardListSouthwestMarriott[27]] = `<a target=\"blank\" href=\"${hyattCardLink}\">World of Hyatt Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsHyatt[cardListUnitedMarriott[27]] = `<a target=\"blank\" href=\"${hyattCardLink}\">World of Hyatt Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCardsCitiPrem[cardListAlaskaIHG[28]] = `<a target=\"blank\" href=\"${citiPremierLink}\">Citi Premier® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsCitiPrem[cardListAmericanIHG[28]] = `<a target=\"blank\" href=\"${citiPremierLink}\">Citi Premier® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsCitiPrem[cardListDeltaIHG[28]] = `<a target=\"blank\" href=\"${citiPremierLink}\">Citi Premier® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsCitiPrem[cardListJetBlueIHG[28]] = `<a target=\"blank\" href=\"${citiPremierLink}\">Citi Premier® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsCitiPrem[cardListSouthwestIHG[28]] = `<a target=\"blank\" href=\"${citiPremierLink}\">Citi Premier® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsCitiPrem[cardListUnitedIHG[28]] = `<a target=\"blank\" href=\"${citiPremierLink}\">Citi Premier® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsCitiPrem[cardListAlaskaHilton[28]] = `<a target=\"blank\" href=\"${citiPremierLink}\">Citi Premier® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsCitiPrem[cardListAmericanHilton[28]] = `<a target=\"blank\" href=\"${citiPremierLink}\">Citi Premier® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsCitiPrem[cardListDeltaHilton[28]] = `<a target=\"blank\" href=\"${citiPremierLink}\">Citi Premier® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsCitiPrem[cardListJetBlueHilton[28]] = `<a target=\"blank\" href=\"${citiPremierLink}\">Citi Premier® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsCitiPrem[cardListSouthwestHilton[28]] = `<a target=\"blank\" href=\"${citiPremierLink}\">Citi Premier® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsCitiPrem[cardListUnitedHilton[28]] = `<a target=\"blank\" href=\"${citiPremierLink}\">Citi Premier® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsCitiPrem[cardListAlaskaHyatt[28]] = `<a target=\"blank\" href=\"${citiPremierLink}\">Citi Premier® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsCitiPrem[cardListAmericanHyatt[28]] = `<a target=\"blank\" href=\"${citiPremierLink}\">Citi Premier® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsCitiPrem[cardListDeltaHyatt[28]] = `<a target=\"blank\" href=\"${citiPremierLink}\">Citi Premier® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsCitiPrem[cardListJetBlueHyatt[28]] = `<a target=\"blank\" href=\"${citiPremierLink}\">Citi Premier® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsCitiPrem[cardListSouthwestHyatt[28]] = `<a target=\"blank\" href=\"${citiPremierLink}\">Citi Premier® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsCitiPrem[cardListUnitedHyatt[28]] = `<a target=\"blank\" href=\"${citiPremierLink}\">Citi Premier® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsCitiPrem[cardListAlaskaMarriott[28]] = `<a target=\"blank\" href=\"${citiPremierLink}\">Citi Premier® Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsCitiPrem[cardListAmericanMarriott[28]] = `<a target=\"blank\" href=\"${citiPremierLink}\">Citi Premier® Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsCitiPrem[cardListDeltaMarriott[28]] = `<a target=\"blank\" href=\"${citiPremierLink}\">Citi Premier® Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsCitiPrem[cardListJetBlueMarriott[28]] = `<a target=\"blank\" href=\"${citiPremierLink}\">Citi Premier® Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsCitiPrem[cardListSouthwestMarriott[28]] = `<a target=\"blank\" href=\"${citiPremierLink}\">Citi Premier® Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsCitiPrem[cardListUnitedMarriott[28]] = `<a target=\"blank\" href=\"${citiPremierLink}\">Citi Premier® Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCardsAmerMile[cardListAlaskaIHG[29]] = `<a target=\"blank\" href=\"${americanMileLink}\">American AAdvantage MileUp℠ Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmerMile[cardListAmericanIHG[29]] = `<a target=\"blank\" href=\"${americanMileLink}\">American AAdvantage MileUp℠ Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmerMile[cardListDeltaIHG[29]] = `<a target=\"blank\" href=\"${americanMileLink}\">American AAdvantage MileUp℠ Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmerMile[cardListJetBlueIHG[29]] = `<a target=\"blank\" href=\"${americanMileLink}\">American AAdvantage MileUp℠ Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmerMile[cardListSouthwestIHG[29]] = `<a target=\"blank\" href=\"${americanMileLink}\">American AAdvantage MileUp℠ Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmerMile[cardListUnitedIHG[29]] = `<a target=\"blank\" href=\"${americanMileLink}\">American AAdvantage MileUp℠ Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmerMile[cardListAlaskaHilton[29]] = `<a target=\"blank\" href=\"${americanMileLink}\">American AAdvantage MileUp℠ Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmerMile[cardListAmericanHilton[29]] = `<a target=\"blank\" href=\"${americanMileLink}\">American AAdvantage MileUp℠ Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmerMile[cardListDeltaHilton[29]] = `<a target=\"blank\" href=\"${americanMileLink}\">American AAdvantage MileUp℠ Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmerMile[cardListJetBlueHilton[29]] = `<a target=\"blank\" href=\"${americanMileLink}\">American AAdvantage MileUp℠ Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmerMile[cardListSouthwestHilton[29]] = `<a target=\"blank\" href=\"${americanMileLink}\">American AAdvantage MileUp℠ Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmerMile[cardListUnitedHilton[29]] = `<a target=\"blank\" href=\"${americanMileLink}\">American AAdvantage MileUp℠ Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmerMile[cardListAlaskaHyatt[29]] = `<a target=\"blank\" href=\"${americanMileLink}\">American AAdvantage MileUp℠ Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmerMile[cardListAmericanHyatt[29]] = `<a target=\"blank\" href=\"${americanMileLink}\">American AAdvantage MileUp℠ Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmerMile[cardListDeltaHyatt[29]] = `<a target=\"blank\" href=\"${americanMileLink}\">American AAdvantage MileUp℠ Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmerMile[cardListJetBlueHyatt[29]] = `<a target=\"blank\" href=\"${americanMileLink}\">American AAdvantage MileUp℠ Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmerMile[cardListSouthwestHyatt[29]] = `<a target=\"blank\" href=\"${americanMileLink}\">American AAdvantage MileUp℠ Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmerMile[cardListUnitedHyatt[29]] = `<a target=\"blank\" href=\"${americanMileLink}\">American AAdvantage MileUp℠ Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmerMile[cardListAlaskaMarriott[29]] = `<a target=\"blank\" href=\"${americanMileLink}\">American AAdvantage MileUp℠ Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmerMile[cardListAmericanMarriott[29]] = `<a target=\"blank\" href=\"${americanMileLink}\">American AAdvantage MileUp℠ Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmerMile[cardListDeltaMarriott[29]] = `<a target=\"blank\" href=\"${americanMileLink}\">American AAdvantage MileUp℠ Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmerMile[cardListJetBlueMarriott[29]] = `<a target=\"blank\" href=\"${americanMileLink}\">American AAdvantage MileUp℠ Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmerMile[cardListSouthwestMarriott[29]] = `<a target=\"blank\" href=\"${americanMileLink}\">American AAdvantage MileUp℠ Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmerMile[cardListUnitedMarriott[29]] = `<a target=\"blank\" href=\"${americanMileLink}\">American AAdvantage MileUp℠ Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCardsAmerWorldElite[cardListAlaskaIHG[30]] = `<a target=\"blank\" href=\"${americanPlatinumLink}\">American AAdvantage® Platinum Select® World Elite Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmerWorldElite[cardListAmericanIHG[30]] = `<a target=\"blank\" href=\"${americanPlatinumLink}\">American AAdvantage® Platinum Select® World Elite Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmerWorldElite[cardListDeltaIHG[30]] = `<a target=\"blank\" href=\"${americanPlatinumLink}\">American AAdvantage® Platinum Select® World Elite Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmerWorldElite[cardListJetBlueIHG[30]] = `<a target=\"blank\" href=\"${americanPlatinumLink}\">American AAdvantage® Platinum Select® World Elite Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmerWorldElite[cardListSouthwestIHG[30]] = `<a target=\"blank\" href=\"${americanPlatinumLink}\">American AAdvantage® Platinum Select® World Elite Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmerWorldElite[cardListUnitedIHG[30]] = `<a target=\"blank\" href=\"${americanPlatinumLink}\">American AAdvantage® Platinum Select® World Elite Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmerWorldElite[cardListAlaskaHilton[30]] = `<a target=\"blank\" href=\"${americanPlatinumLink}\">American AAdvantage® Platinum Select® World Elite Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmerWorldElite[cardListAmericanHilton[30]] = `<a target=\"blank\" href=\"${americanPlatinumLink}\">American AAdvantage® Platinum Select® World Elite Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmerWorldElite[cardListDeltaHilton[30]] = `<a target=\"blank\" href=\"${americanPlatinumLink}\">American AAdvantage® Platinum Select® World Elite Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmerWorldElite[cardListJetBlueHilton[30]] = `<a target=\"blank\" href=\"${americanPlatinumLink}\">American AAdvantage® Platinum Select® World Elite Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmerWorldElite[cardListSouthwestHilton[30]] = `<a target=\"blank\" href=\"${americanPlatinumLink}\">American AAdvantage® Platinum Select® World Elite Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmerWorldElite[cardListUnitedHilton[30]] = `<a target=\"blank\" href=\"${americanPlatinumLink}\">American AAdvantage® Platinum Select® World Elite Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmerWorldElite[cardListAlaskaHyatt[30]] = `<a target=\"blank\" href=\"${americanPlatinumLink}\">American AAdvantage® Platinum Select® World Elite Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmerWorldElite[cardListAmericanHyatt[30]] = `<a target=\"blank\" href=\"${americanPlatinumLink}\">American AAdvantage® Platinum Select® World Elite Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmerWorldElite[cardListDeltaHyatt[30]] = `<a target=\"blank\" href=\"${americanPlatinumLink}\">American AAdvantage® Platinum Select® World Elite Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmerWorldElite[cardListJetBlueHyatt[30]] = `<a target=\"blank\" href=\"${americanPlatinumLink}\">American AAdvantage® Platinum Select® World Elite Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmerWorldElite[cardListSouthwestHyatt[30]] = `<a target=\"blank\" href=\"${americanPlatinumLink}\">American AAdvantage® Platinum Select® World Elite Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmerWorldElite[cardListUnitedHyatt[30]] = `<a target=\"blank\" href=\"${americanPlatinumLink}\">American AAdvantage® Platinum Select® World Elite Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmerWorldElite[cardListAlaskaMarriott[30]] = `<a target=\"blank\" href=\"${americanPlatinumLink}\">American AAdvantage® Platinum Select® World Elite Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmerWorldElite[cardListAmericanMarriott[30]] = `<a target=\"blank\" href=\"${americanPlatinumLink}\">American AAdvantage® Platinum Select® World Elite Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmerWorldElite[cardListDeltaMarriott[30]] = `<a target=\"blank\" href=\"${americanPlatinumLink}\">American AAdvantage® Platinum Select® World Elite Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmerWorldElite[cardListJetBlueMarriott[30]] = `<a target=\"blank\" href=\"${americanPlatinumLink}\">American AAdvantage® Platinum Select® World Elite Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmerWorldElite[cardListSouthwestMarriott[30]] = `<a target=\"blank\" href=\"${americanPlatinumLink}\">American AAdvantage® Platinum Select® World Elite Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmerWorldElite[cardListUnitedMarriott[30]] = `<a target=\"blank\" href=\"${americanPlatinumLink}\">American AAdvantage® Platinum Select® World Elite Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewAmerExecards program`

  creditCardsAmerExec[cardListAlaskaIHG[31]] = `<a target=\"blank\" href=\"${americanExecutiveLink}\">American AAdvantage® Executive World Elite Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmerExec[cardListAmericanIHG[31]] = `<a target=\"blank\" href=\"${americanExecutiveLink}\">American AAdvantage® Executive World Elite Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmerExec[cardListDeltaIHG[31]] = `<a target=\"blank\" href=\"${americanExecutiveLink}\">American AAdvantage® Executive World Elite Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmerExec[cardListJetBlueIHG[31]] = `<a target=\"blank\" href=\"${americanExecutiveLink}\">American AAdvantage® Executive World Elite Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmerExec[cardListSouthwestIHG[31]] = `<a target=\"blank\" href=\"${americanExecutiveLink}\">American AAdvantage® Executive World Elite Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmerExec[cardListUnitedIHG[31]] = `<a target=\"blank\" href=\"${americanExecutiveLink}\">American AAdvantage® Executive World Elite Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCardsAmerExec[cardListAlaskaHilton[31]] = `<a target=\"blank\" href=\"${americanExecutiveLink}\">American AAdvantage® Executive World Elite Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmerExec[cardListAmericanHilton[31]] = `<a target=\"blank\" href=\"${americanExecutiveLink}\">American AAdvantage® Executive World Elite Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmerExec[cardListDeltaHilton[31]] = `<a target=\"blank\" href=\"${americanExecutiveLink}\">American AAdvantage® Executive World Elite Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmerExec[cardListJetBlueHilton[31]] = `<a target=\"blank\" href=\"${americanExecutiveLink}\">American AAdvantage® Executive World Elite Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmerExec[cardListSouthwestHilton[31]] = `<a target=\"blank\" href=\"${americanExecutiveLink}\">American AAdvantage® Executive World Elite Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmerExec[cardListUnitedHilton[31]] = `<a target=\"blank\" href=\"${americanExecutiveLink}\">American AAdvantage® Executive World Elite Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCardsAmerExec[cardListAlaskaHyatt[31]] = `<a target=\"blank\" href=\"${americanExecutiveLink}\">American AAdvantage® Executive World Elite Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmerExec[cardListAmericanHyatt[31]] = `<a target=\"blank\" href=\"${americanExecutiveLink}\">American AAdvantage® Executive World Elite Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmerExec[cardListDeltaHyatt[31]] = `<a target=\"blank\" href=\"${americanExecutiveLink}\">American AAdvantage® Executive World Elite Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmerExec[cardListJetBlueHyatt[31]] = `<a target=\"blank\" href=\"${americanExecutiveLink}\">American AAdvantage® Executive World Elite Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmerExec[cardListSouthwestHyatt[31]] = `<a target=\"blank\" href=\"${americanExecutiveLink}\">American AAdvantage® Executive World Elite Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmerExec[cardListUnitedHyatt[31]] = `<a target=\"blank\" href=\"${americanExecutiveLink}\">American AAdvantage® Executive World Elite Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCardsAmerExec[cardListAlaskaMarriott[31]] = `<a target=\"blank\" href=\"${americanExecutiveLink}\">American AAdvantage® Executive World Elite Card</a> - Using the <a target=\"blank\" href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmerExec[cardListAmericanMarriott[31]] = `<a target=\"blank\" href=\"${americanExecutiveLink}\">American AAdvantage® Executive World Elite Card</a> - Using the <a target=\"blank\" href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmerExec[cardListDeltaMarriott[31]] = `<a target=\"blank\" href=\"${americanExecutiveLink}\">American AAdvantage® Executive World Elite Card</a> - Using the <a target=\"blank\" href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmerExec[cardListJetBlueMarriott[31]] = `<a target=\"blank\" href=\"${americanExecutiveLink}\">American AAdvantage® Executive World Elite Card</a> - Using the <a target=\"blank\" href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCardsAmerExec[cardListSouthwestMarriott[31]] = `<a target=\"blank\" href=\"${americanExecutiveLink}\">American AAdvantage® Executive World Elite Card</a> - Using the <a target=\"blank\" href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListUnitedMarriott[31]] = `<a target=\"blank\" href=\"${americanExecutiveLink}\">American AAdvantage® Executive World Elite Card</a> - Using the <a target=\"blank\" href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a target=\"blank\" href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  const numberSorter = (a, b) => a - b

  cardListAlaskaIHG.sort(numberSorter)
  cardListAlaskaIHG.reverse()
  cardListAmericanIHG.sort(numberSorter)
  cardListAmericanIHG.reverse()
  cardListDeltaIHG.sort(numberSorter)
  cardListDeltaIHG.reverse()
  cardListJetBlueIHG.sort(numberSorter)
  cardListJetBlueIHG.reverse()
  cardListSouthwestIHG.sort(numberSorter)
  cardListSouthwestIHG.reverse()
  cardListUnitedIHG.sort(numberSorter)
  cardListUnitedIHG.reverse()

  cardListAlaskaHilton.sort(numberSorter)
  cardListAlaskaHilton.reverse()
  cardListAmericanHilton.sort(numberSorter)
  cardListAmericanHilton.reverse()
  cardListDeltaHilton.sort(numberSorter)
  cardListDeltaHilton.reverse()
  cardListJetBlueHilton.sort(numberSorter)
  cardListJetBlueHilton.reverse()
  cardListSouthwestHilton.sort(numberSorter)
  cardListSouthwestHilton.reverse()
  cardListUnitedHilton.sort(numberSorter)
  cardListUnitedHilton.reverse()

  cardListAlaskaHyatt.sort(numberSorter)
  cardListAlaskaHyatt.reverse()
  cardListAmericanHyatt.sort(numberSorter)
  cardListAmericanHyatt.reverse()
  cardListDeltaHyatt.sort(numberSorter)
  cardListDeltaHyatt.reverse()
  cardListJetBlueHyatt.sort(numberSorter)
  cardListJetBlueHyatt.reverse()
  cardListSouthwestHyatt.sort(numberSorter)
  cardListSouthwestHyatt.reverse()
  cardListUnitedHyatt.sort(numberSorter)
  cardListUnitedHyatt.reverse()

  cardListAlaskaMarriott.sort(numberSorter)
  cardListAlaskaMarriott.reverse()
  cardListAmericanMarriott.sort(numberSorter)
  cardListAmericanMarriott.reverse()
  cardListDeltaMarriott.sort(numberSorter)
  cardListDeltaMarriott.reverse()
  cardListJetBlueMarriott.sort(numberSorter)
  cardListJetBlueMarriott.reverse()
  cardListSouthwestMarriott.sort(numberSorter)
  cardListSouthwestMarriott.reverse()
  cardListUnitedMarriott.sort(numberSorter)
  cardListUnitedMarriott.reverse()

  let cards = []
  let item
  for (item of [cardListAlaskaIHG, cardListAmericanIHG, cardListDeltaIHG, cardListJetBlueIHG, cardListSouthwestIHG,
    cardListUnitedIHG,
    cardListAlaskaHilton, cardListAmericanHilton, cardListDeltaHilton, cardListJetBlueHilton, cardListSouthwestHilton,
    cardListUnitedHilton,
    cardListAlaskaHyatt, cardListAmericanHyatt, cardListDeltaHyatt, cardListJetBlueHyatt, cardListSouthwestHyatt, cardListUnitedHyatt,
    cardListAlaskaMarriott, cardListAmericanMarriott, cardListDeltaMarriott, cardListJetBlueMarriott, cardListSouthwestMarriott,
    cardListUnitedMarriott]) {
      let value
      for (value of item) {
        cards.push(value)
      }
    }

  cards.sort(numberSorter)

  // let cards_budget = []
  // for item in [cardListAlaskaIHG[4: 8], cardListAlaskaIHG[10: 12], cardListAlaskaIHG[13: 15],
  // cardListAlaskaIHG[20: 23], cardListAlaskaIHG[25: 31], cardListAmericanIHG[4: 8],
  // cardListAmericanIHG[10: 12], cardListAmericanIHG[13: 15],
  // cardListAmericanIHG[20: 23], cardListAmericanIHG[25:
  // 31], cardListDeltaIHG[4: 8], cardListDeltaIHG[10: 12],
  // cardListDeltaIHG[13: 15], cardListDeltaIHG[20: 23],
  // cardListDeltaIHG[25: 31], cardListJetBlueIHG[4:
  // 8], cardListJetBlueIHG[10: 12], cardListJetBlueIHG[13: 15],
  // cardListJetBlueIHG[20: 23], cardListJetBlueIHG[25: 31],
  // cardListSouthwestIHG[4: 8], cardListSouthwestIHG[10: 12], cardListSouthwestIHG[13: 15],
  // cardListSouthwestIHG[20: 23], cardListSouthwestIHG[25: 31], cardListUnitedIHG[4: 8],
  // cardListUnitedIHG[10: 12], cardListUnitedIHG[13: 15],
  // cardListUnitedIHG[20: 23], cardListUnitedIHG[25: 31],
  // cardListAlaskaHilton[4: 8], cardListAlaskaHilton[10: 12], cardListAlaskaHilton[13:
  // 15], cardListAlaskaHilton[20: 23], cardListAlaskaHilton[25: 31], cardListAmericanHilton[4: 8],
  // cardListAmericanHilton[10: 12], cardListAmericanHilton[13: 15],
  // cardListAmericanHilton[20: 23], cardListAmericanHilton[25:
  // 31], cardListDeltaHilton[4: 8], cardListDeltaHilton[10: 12],
  // cardListDeltaHilton[13: 15], cardListDeltaHilton[20: 23],
  // cardListDeltaHilton[25: 31], cardListJetBlueHilton[4:
  // 8], cardListJetBlueHilton[10: 12], cardListJetBlueHilton[13: 15],
  // cardListJetBlueHilton[20: 23], cardListJetBlueHilton[25: 31],
  // cardListSouthwestHilton[4: 8], cardListSouthwestHilton[10: 12], cardListSouthwestHilton[13:
  // 15], cardListSouthwestHilton[20: 23], cardListSouthwestHilton[25: 31], cardListUnitedHilton[4: 8],
  // cardListUnitedHilton[10: 12], cardListUnitedHilton[13: 15],
  // cardListUnitedHilton[20: 23], cardListUnitedHilton[25: 31],
  // cardListAlaskaHyatt[4: 8], cardListAlaskaHyatt[10: 12], cardListAlaskaHyatt[13:
  // 15], cardListAlaskaHyatt[20: 23], cardListAlaskaHyatt[25: 31], cardListAmericanHyatt[4: 8],
  // cardListAmericanHyatt[10: 12], cardListAmericanHyatt[13: 15],
  // cardListAmericanHyatt[20: 23], cardListAmericanHyatt[25:
  // 31], cardListDeltaHyatt[4: 8], cardListDeltaHyatt[10: 12],
  // cardListDeltaHyatt[13: 15], cardListDeltaHyatt[20: 23],
  // cardListDeltaHyatt[25: 31], cardListJetBlueHyatt[4:
  // 8], cardListJetBlueHyatt[10: 12], cardListJetBlueHyatt[13: 15],
  // cardListJetBlueHyatt[20: 23], cardListJetBlueHyatt[25: 31],
  // cardListSouthwestHyatt[4: 8], cardListSouthwestHyatt[10: 12], cardListSouthwestHyatt[13:
  // 15], cardListSouthwestHyatt[20: 23], cardListSouthwestHyatt[25: 31], cardListUnitedHyatt[4: 8],
  // cardListUnitedHyatt[10: 12], cardListUnitedHyatt[13: 15],
  // cardListUnitedHyatt[20: 23], cardListUnitedHyatt[25: 31],
  // cardListAlaskaMarriott[4: 8], cardListAlaskaMarriott[10: 12], cardListAlaskaMarriott[13:
  // 15], cardListAlaskaMarriott[20: 23], cardListAlaskaMarriott[25: 31], cardListAmericanMarriott[4: 8],
  // cardListAmericanMarriott[10: 12], cardListAmericanMarriott[13: 15],
  // cardListAmericanMarriott[20: 23], cardListAmericanMarriott[25:
  // 31], cardListDeltaMarriott[4: 8], cardListDeltaMarriott[10: 12],
  // cardListDeltaMarriott[13: 15], cardListDeltaMarriott[20: 23],
  // cardListDeltaMarriott[25: 31], cardListJetBlueMarriott[4:
  // 8], cardListJetBlueMarriott[10: 12], cardListJetBlueMarriott[13: 15],
  // cardListJetBlueMarriott[20: 23], cardListJetBlueMarriott[25: 31],
  // cardListSouthwestMarriott[4: 8], cardListSouthwestMarriott[10: 12], cardListSouthwestMarriott[13:
  // 15], cardListSouthwestMarriott[20: 23], cardListSouthwestMarriott[25: 31], cardListUnitedMarriott[4: 8],
  // cardListUnitedMarriott[10: 12], cardListUnitedMarriott[13: 15],
  // cardListUnitedMarriott[20: 23], cardListUnitedMarriott[25: 31]] =
  // for value in item:
  //   cards_budget.push(value)
  // cards_budget.push(cardListAlaskaIHG[16])
  // cards_budget.push(cardListAlaskaIHG[18])
  // cards_budget.push(cardListAmericanIHG[16])
  // cards_budget.push(cardListAmericanIHG[18])
  // cards_budget.push(cardListDeltaIHG[16])
  // cards_budget.push(cardListDeltaIHG[18])
  // cards_budget.push(cardListJetBlueIHG[16])
  // cards_budget.push(cardListJetBlueIHG[18])
  // cards_budget.push(cardListSouthwestIHG[16])
  // cards_budget.push(cardListSouthwestIHG[18])
  // cards_budget.push(cardListUnitedIHG[16])
  // cards_budget.push(cardListUnitedIHG[18])
  // cards_budget.push(cardListAlaskaHilton[16])
  // cards_budget.push(cardListAlaskaHilton[18])
  // cards_budget.push(cardListAmericanHilton[16])
  // cards_budget.push(cardListAmericanHilton[18])
  // cards_budget.push(cardListDeltaHilton[16])
  // cards_budget.push(cardListDeltaHilton[18])
  // cards_budget.push(cardListJetBlueHilton[16])
  // cards_budget.push(cardListJetBlueHilton[18])
  // cards_budget.push(cardListSouthwestHilton[16])
  // cards_budget.push(cardListSouthwestHilton[18])
  // cards_budget.push(cardListUnitedHilton[16])
  // cards_budget.push(cardListUnitedHilton[18])
  // cards_budget.push(cardListAlaskaHyatt[16])
  // cards_budget.push(cardListAlaskaHyatt[18])
  // cards_budget.push(cardListAmericanHyatt[16])
  // cards_budget.push(cardListAmericanHyatt[18])
  // cards_budget.push(cardListDeltaHyatt[16])
  // cards_budget.push(cardListDeltaHyatt[18])
  // cards_budget.push(cardListJetBlueHyatt[16])
  // cards_budget.push(cardListJetBlueHyatt[18])
  // cards_budget.push(cardListSouthwestHyatt[16])
  // cards_budget.push(cardListSouthwestHyatt[18])
  // cards_budget.push(cardListUnitedHyatt[16])
  // cards_budget.push(cardListUnitedHyatt[18])
  // cards_budget.push(cardListAlaskaMarriott[16])
  // cards_budget.push(cardListAlaskaMarriott[18])
  // cards_budget.push(cardListAmericanMarriott[16])
  // cards_budget.push(cardListAmericanMarriott[18])
  // cards_budget.push(cardListDeltaMarriott[16])
  // cards_budget.push(cardListDeltaMarriott[18])
  // cards_budget.push(cardListJetBlueMarriott[16])
  // cards_budget.push(cardListJetBlueMarriott[18])
  // cards_budget.push(cardListSouthwestMarriott[16])
  // cards_budget.push(cardListSouthwestMarriott[18])
  // cards_budget.push(cardListUnitedMarriott[16])
  // cards_budget.push(cardListUnitedMarriott[18])
  // cards_budget.sort(reverse = True)

  // TODO Do the above for budget and free cards

  let topThree = []
  for (let i = 0; i < 3; i++) {
    let finalCard = cards.pop()
    if (finalCard in creditCardsAmexPlat) {
      topThree.append(creditCardsAmexPlat[finalCard])
    } else if (finalCard in creditCardsAmexGold) {
      topThree.append(creditCardsAmexGold[finalCard])
    } else if (finalCard in creditCardsAmexGreen) {
      topThree.append(creditCardsAmexGreen[finalCard])
    } else if (finalCard in creditCardsAmexED) {
      topThree.append(creditCardsAmexED[finalCard])
    } else if (finalCard in creditCardsAmexEDP) {
      topThree.append(creditCardsAmexEDP[finalCard])
    } else if (finalCard in creditCardsAmexBlue) {
      topThree.append(creditCardsAmexBlue[finalCard])
    } else if (finalCard in creditCardsDeltaBlue) {
      topThree.append(creditCardsDeltaBlue[finalCard])
    } else if (finalCard in creditCardsDeltaGold) {
      topThree.append(creditCardsDeltaGold[finalCard])
    } else if (finalCard in creditCardsDeltaGold) {
      topThree.append(creditCardsDeltaGold[finalCard])
    } else if (finalCard in creditCardsDeltaPlat) {
      topThree.append(creditCardsDeltaPlat[finalCard])
    } else if (finalCard in creditCardsDeltaRes) {
      topThree.append(creditCardsDeltaRes[finalCard])
    } else if (finalCard in creditCardsHilHon) {
      topThree.append(creditCardsHilHon[finalCard])
    } else if (finalCard in creditCardsHilSur) {
      topThree.append(creditCardsHilSur[finalCard])
    } else if (finalCard in creditCardsHilAsp) {
      topThree.append(creditCardsHilAsp[finalCard])
    } else if (finalCard in creditCardsMarBold) {
      topThree.append(creditCardsMarBold[finalCard])
    } else if (finalCard in creditCardsMarBound) {
      topThree.append(creditCardsMarBound[finalCard])
    } else if (finalCard in creditCardsMarBril) {
      topThree.append(creditCardsMarBril[finalCard])
    } else if (finalCard in creditCardsChaseSapPref) {
      topThree.append(creditCardsChaseSapPref[finalCard])
    } else if (finalCard in creditCardsChaseSapRes) {
      topThree.append(creditCardsChaseSapRes[finalCard])
    } else if (finalCard in creditCardsSWPlus) {
      topThree.append(creditCardsSWPlus[finalCard])
    } else if (finalCard in creditCardsSWPrem) {
      topThree.append(creditCardsSWPrem[finalCard])
    } else if (finalCard in creditCardsSWPri) {
      topThree.append(creditCardsSWPri[finalCard])
    } else if (finalCard in creditCardsUnitedGate) {
      topThree.append(creditCardsUnitedGate[finalCard])
    } else if (finalCard in creditCardsUnitedExp) {
      topThree.append(creditCardsUnitedExp[finalCard])
    } else if (finalCard in creditCardsUnitedQuest) {
      topThree.append(creditCardsUnitedQuest[finalCard])
    } else if (finalCard in creditCardsUnitedClubInf) {
      topThree.append(creditCardsUnitedClubInf[finalCard])
    } else if (finalCard in creditCardsIHGTrav) {
      topThree.append(creditCardsIHGTrav[finalCard])
    } else if (finalCard in creditCardsIHGPrem) {
      topThree.append(creditCardsIHGPrem[finalCard])
    } else if (finalCard in creditCardsHyatt) {
      topThree.append(creditCardsHyatt[finalCard])
    } else if (finalCard in creditCardsCitiPrem) {
      topThree.append(creditCardsCitiPrem[finalCard])
    } else if (finalCard in creditCardsAmerMile) {
      topThree.append(creditCardsAmerMile[finalCard])
    } else if (finalCard in creditCardsAmerWorldElite) {
      topThree.append(creditCardsAmerWorldElite[finalCard])
    } else if (finalCard in creditCardsAmerExec) {
      topThree.append(creditCardsAmerExec[finalCard])
    }
  }
  let first = topThree[0]
  let second = topThree[1]
  let third = topThree[2]

  // creditCards_budget = deepcopy(creditCards)
  // first_budget = creditCards_budget[cards_budget[0]]
  // creditCards_budget.pop(cards_budget[0])
  // second_budget = creditCards_budget[cards_budget[1]]
  // creditCards_budget.pop(cards_budget[1])
  // third_budget = creditCards_budget[cards_budget[2]]

  document.querySelector('header').innerHTML = `<h1>Your Results</h1><h3>Based on your input, these are the best rewards cards for you:</h3>`
  document.querySelector('div.field').innerHTML = `<ol class="results"><li>${first}</li><li>${second}</li><li>${third}</li></ol>`
})
