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

  const deltaBlueLink = 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-blue-american-express-card/'
  const deltaGoldLink = 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-gold-american-express-card/'
  const deltaPlatLink = 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-platinum-american-express-card/'
  const deltaResLink = 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-reserve-american-express-card/'

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
  
  const marriottBoldLink = 'https://creditcards.chase.com/travel-credit-cards/marriott-bonvoy/bold'
  const marriottBoundlessLink = 'https://creditcards.chase.com/travel-credit-cards/marriott-bonvoy/boundless'
  const marriottBrilliantLink = 'https://www.americanexpress.com/us/credit-cards/card/marriott-bonvoy-brilliant/'

  let creditCards = {}
  creditCards[cardListAlaskaIHG[0]] = `<a href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAmericanIHG[0]] = `<a href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListDeltaIHG[0]] = `<a href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListJetBlueIHG[0]] = `<a href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListSouthwestIHG[0]] = `<a href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListUnitedIHG[0]] = `<a href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAlaskaHilton[0]] = `<a href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAmericanHilton[0]] = `<a href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListDeltaHilton[0]] = `<a href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListJetBlueHilton[0]] = `<a href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListSouthwestHilton[0]] = `<a href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListUnitedHilton[0]] = `<a href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAlaskaHyatt[0]] = `<a href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAmericanHyatt[0]] = `<a href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListDeltaHyatt[0]] = `<a href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListJetBlueHyatt[0]] = `<a href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListSouthwestHyatt[0]] = `<a href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListUnitedHyatt[0]] = `<a href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAlaskaMarriott[0]] = `<a href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListAmericanMarriott[0]] = `<a href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListDeltaMarriott[0]] = `<a href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListJetBlueMarriott[0]] = `<a href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListSouthwestMarriott[0]] = `<a href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListUnitedMarriott[0]] = `<a href=\"${amexPlatLink}\">American Express® Platinum Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCards[cardListAlaskaIHG[1]] = `<a href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAmericanIHG[1]] = `<a href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListDeltaIHG[1]] = `<a href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListJetBlueIHG[1]] = `<a href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListSouthwestIHG[1]] = `<a href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListUnitedIHG[1]] = `<a href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAlaskaHilton[1]] = `<a href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAmericanHilton[1]] = `<a href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListDeltaHilton[1]] = `<a href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListJetBlueHilton[1]] = `<a href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListSouthwestHilton[1]] = `<a href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListUnitedHilton[1]] = `<a href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAlaskaHyatt[1]] = `<a href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAmericanHyatt[1]] = `<a href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListDeltaHyatt[1]] = `<a href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListJetBlueHyatt[1]] = `<a href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListSouthwestHyatt[1]] = `<a href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListUnitedHyatt[1]] = `<a href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAlaskaMarriott[1]] = `<a href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListAmericanMarriott[1]] = `<a href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListDeltaMarriott[1]] = `<a href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListJetBlueMarriott[1]] = `<a href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListSouthwestMarriott[1]] = `<a href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListUnitedMarriott[1]] = `<a href=\"${amexGoldLink}\">American Express® Gold Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCards[cardListAlaskaIHG[2]] = `<a href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAmericanIHG[2]] = `<a href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListDeltaIHG[2]] = `<a href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListJetBlueIHG[2]] = `<a href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListSouthwestIHG[2]] = `<a href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListUnitedIHG[2]] = `<a href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAlaskaHilton[2]] = `<a href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAmericanHilton[2]] = `<a href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListDeltaHilton[2]] = `<a href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListJetBlueHilton[2]] = `<a href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListSouthwestHilton[2]] = `<a href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListUnitedHilton[2]] = `<a href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAlaskaHyatt[2]] = `<a href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAmericanHyatt[2]] = `<a href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListDeltaHyatt[2]] = `<a href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListJetBlueHyatt[2]] = `<a href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListSouthwestHyatt[2]] = `<a href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListUnitedHyatt[2]] = `<a href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAlaskaMarriott[2]] = `<a href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListAmericanMarriott[2]] = `<a href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListDeltaMarriott[2]] = `<a href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListJetBlueMarriott[2]] = `<a href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListSouthwestMarriott[2]] = `<a href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListUnitedMarriott[2]] = `<a href=\"${amexGreenLink}\">American Express® Green Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCards[cardListAlaskaIHG[3]] = `<a href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAmericanIHG[3]] = `<a href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListDeltaIHG[3]] = `<a href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListJetBlueIHG[3]] = `<a href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListSouthwestIHG[3]] = `<a href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListUnitedIHG[3]] = `<a href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAlaskaHilton[3]] = `<a href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAmericanHilton[3]] = `<a href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListDeltaHilton[3]] = `<a href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListJetBlueHilton[3]] = `<a href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListSouthwestHilton[3]] = `<a href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListUnitedHilton[3]] = `<a href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAlaskaHyatt[3]] = `<a href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAmericanHyatt[3]] = `<a href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListDeltaHyatt[3]] = `<a href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListJetBlueHyatt[3]] = `<a href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListSouthwestHyatt[3]] = `<a href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListUnitedHyatt[3]] = `<a href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAlaskaMarriott[3]] = `<a href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListAmericanMarriott[3]] = `<a href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListDeltaMarriott[3]] = `<a href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListJetBlueMarriott[3]] = `<a href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListSouthwestMarriott[3]] = `<a href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListUnitedMarriott[3]] = `<a href=\"${amexEdLink}\">American Express® EveryDay® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCards[cardListAlaskaIHG[4]] = `<a href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAmericanIHG[4]] = `<a href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListDeltaIHG[4]] = `<a href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListJetBlueIHG[4]] = `<a href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListSouthwestIHG[4]] = `<a href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListUnitedIHG[4]] = `<a href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAlaskaHilton[4]] = `<a href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAmericanHilton[4]] = `<a href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListDeltaHilton[4]] = `<a href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListJetBlueHilton[4]] = `<a href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListSouthwestHilton[4]] = `<a href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListUnitedHilton[4]] = `<a href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAlaskaHyatt[4]] = `<a href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAmericanHyatt[4]] = `<a href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListDeltaHyatt[4]] = `<a href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListJetBlueHyatt[4]] = `<a href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListSouthwestHyatt[4]] = `<a href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListUnitedHyatt[4]] = `<a href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAlaskaMarriott[4]] = `<a href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListAmericanMarriott[4]] = `<a href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListDeltaMarriott[4]] = `<a href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListJetBlueMarriott[4]] = `<a href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListSouthwestMarriott[4]] = `<a href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListUnitedMarriott[4]] = `<a href=\"${amexEdpLink}\">American Express® EveryDay® Preferred Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCards[cardListAlaskaIHG[5]] = `<a href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAmericanIHG[5]] = `<a href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListDeltaIHG[5]] = `<a href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListJetBlueIHG[5]] = `<a href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListSouthwestIHG[5]] = `<a href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListUnitedIHG[5]] = `<a href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAlaskaHilton[5]] = `<a href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAmericanHilton[5]] = `<a href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListDeltaHilton[5]] = `<a href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListJetBlueHilton[5]] = `<a href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListSouthwestHilton[5]] = `<a href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListUnitedHilton[5]] = `<a href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAlaskaHyatt[5]] = `<a href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAmericanHyatt[5]] = `<a href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListDeltaHyatt[5]] = `<a href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListJetBlueHyatt[5]] = `<a href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListSouthwestHyatt[5]] = `<a href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListUnitedHyatt[5]] = `<a href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAlaskaMarriott[5]] = `<a href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListAmericanMarriott[5]] = `<a href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListDeltaMarriott[5]] = `<a href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListJetBlueMarriott[5]] = `<a href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListSouthwestMarriott[5]] = `<a href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListUnitedMarriott[5]] = `<a href=\"${amexBlueLink}\">American Express® Blue Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCards[cardListAlaskaIHG[6]] = `<a href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAmericanIHG[6]] = `<a href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListDeltaIHG[6]] = `<a href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListJetBlueIHG[6]] = `<a href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListSouthwestIHG[6]] = `<a href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListUnitedIHG[6]] = `<a href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAlaskaHilton[6]] = `<a href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAmericanHilton[6]] = `<a href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListDeltaHilton[6]] = `<a href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListJetBlueHilton[6]] = `<a href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListSouthwestHilton[6]] = `<a href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListUnitedHilton[6]] = `<a href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAlaskaHyatt[6]] = `<a href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAmericanHyatt[6]] = `<a href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListDeltaHyatt[6]] = `<a href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListJetBlueHyatt[6]] = `<a href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListSouthwestHyatt[6]] = `<a href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListUnitedHyatt[6]] = `<a href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAlaskaMarriott[6]] = `<a href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListAmericanMarriott[6]] = `<a href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListDeltaMarriott[6]] = `<a href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListJetBlueMarriott[6]] = `<a href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListSouthwestMarriott[6]] = `<a href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListUnitedMarriott[6]] = `<a href=\"${deltaBlueLink}\">Delta SkyMiles® Blue Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCards[cardListAlaskaIHG[7]] = `<a href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAmericanIHG[7]] = `<a href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListDeltaIHG[7]] = `<a href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListJetBlueIHG[7]] = `<a href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListSouthwestIHG[7]] = `<a href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListUnitedIHG[7]] = `<a href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAlaskaHilton[7]] = `<a href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAmericanHilton[7]] = `<a href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListDeltaHilton[7]] = `<a href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListJetBlueHilton[7]] = `<a href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListSouthwestHilton[7]] = `<a href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListUnitedHilton[7]] = `<a href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAlaskaHyatt[7]] = `<a href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAmericanHyatt[7]] = `<a href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListDeltaHyatt[7]] = `<a href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListJetBlueHyatt[7]] = `<a href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListSouthwestHyatt[7]] = `<a href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListUnitedHyatt[7]] = `<a href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAlaskaMarriott[7]] = `<a href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListAmericanMarriott[7]] = `<a href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListDeltaMarriott[7]] = `<a href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListJetBlueMarriott[7]] = `<a href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListSouthwestMarriott[7]] = `<a href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListUnitedMarriott[7]] = `<a href=\"${deltaGoldLink}\">Delta SkyMiles® Gold Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCards[cardListAlaskaIHG[8]] = `<a href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAmericanIHG[8]] = `<a href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListDeltaIHG[8]] = `<a href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListJetBlueIHG[8]] = `<a href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListSouthwestIHG[8]] = `<a href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListUnitedIHG[8]] = `<a href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAlaskaHilton[8]] = `<a href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAmericanHilton[8]] = `<a href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListDeltaHilton[8]] = `<a href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListJetBlueHilton[8]] = `<a href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListSouthwestHilton[8]] = `<a href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListUnitedHilton[8]] = `<a href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAlaskaHyatt[8]] = `<a href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAmericanHyatt[8]] = `<a href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListDeltaHyatt[8]] = `<a href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListJetBlueHyatt[8]] = `<a href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListSouthwestHyatt[8]] = `<a href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListUnitedHyatt[8]] = `<a href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAlaskaMarriott[8]] = `<a href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListAmericanMarriott[8]] = `<a href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListDeltaMarriott[8]] = `<a href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListJetBlueMarriott[8]] = `<a href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListSouthwestMarriott[8]] = `<a href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListUnitedMarriott[8]] = `<a href=\"${deltaPlatLink}\">Delta SkyMiles® Platinum Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCards[cardListAlaskaIHG[9]] = `<a href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAmericanIHG[9]] = `<a href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListDeltaIHG[9]] = `<a href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListJetBlueIHG[9]] = `<a href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListSouthwestIHG[9]] = `<a href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListUnitedIHG[9]] = `<a href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAlaskaHilton[9]] = `<a href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAmericanHilton[9]] = `<a href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListDeltaHilton[9]] = `<a href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListJetBlueHilton[9]] = `<a href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListSouthwestHilton[9]] = `<a href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListUnitedHilton[9]] = `<a href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAlaskaHyatt[9]] = `<a href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAmericanHyatt[9]] = `<a href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListDeltaHyatt[9]] = `<a href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListJetBlueHyatt[9]] = `<a href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListSouthwestHyatt[9]] = `<a href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListUnitedHyatt[9]] = `<a href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAlaskaMarriott[9]] = `<a href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListAmericanMarriott[9]] = `<a href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListDeltaMarriott[9]] = `<a href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListJetBlueMarriott[9]] = `<a href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListSouthwestMarriott[9]] = `<a href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListUnitedMarriott[9]] = `<a href=\"${deltaResLink}\">Delta SkyMiles® Reserve Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCards[cardListAlaskaIHG[10]] = `<a href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAmericanIHG[10]] = `<a href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListDeltaIHG[10]] = `<a href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListJetBlueIHG[10]] = `<a href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListSouthwestIHG[10]] = `<a href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListUnitedIHG[10]] = `<a href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAlaskaHilton[10]] = `<a href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAmericanHilton[10]] = `<a href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListDeltaHilton[10]] = `<a href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListJetBlueHilton[10]] = `<a href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListSouthwestHilton[10]] = `<a href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListUnitedHilton[10]] = `<a href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAlaskaHyatt[10]] = `<a href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAmericanHyatt[10]] = `<a href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListDeltaHyatt[10]] = `<a href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListJetBlueHyatt[10]] = `<a href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListSouthwestHyatt[10]] = `<a href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListUnitedHyatt[10]] = `<a href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAlaskaMarriott[10]] = `<a href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListAmericanMarriott[10]] = `<a href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListDeltaMarriott[10]] = `<a href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListJetBlueMarriott[10]] = `<a href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListSouthwestMarriott[10]] = `<a href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListUnitedMarriott[10]] = `<a href=\"${hiltonHonorsLink}\">Hilton Honors® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCards[cardListAlaskaIHG[11]] = `<a href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAmericanIHG[11]] = `<a href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListDeltaIHG[11]] = `<a href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListJetBlueIHG[11]] = `<a href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListSouthwestIHG[11]] = `<a href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListUnitedIHG[11]] = `<a href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAlaskaHilton[11]] = `<a href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAmericanHilton[11]] = `<a href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListDeltaHilton[11]] = `<a href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListJetBlueHilton[11]] = `<a href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListSouthwestHilton[11]] = `<a href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListUnitedHilton[11]] = `<a href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAlaskaHyatt[11]] = `<a href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAmericanHyatt[11]] = `<a href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListDeltaHyatt[11]] = `<a href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListJetBlueHyatt[11]] = `<a href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListSouthwestHyatt[11]] = `<a href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListUnitedHyatt[11]] = `<a href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAlaskaMarriott[11]] = `<a href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListAmericanMarriott[11]] = `<a href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListDeltaMarriott[11]] = `<a href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListJetBlueMarriott[11]] = `<a href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListSouthwestMarriott[11]] = `<a href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListUnitedMarriott[11]] = `<a href=\"${hiltonSurpassLink}\">Hilton Honors Surpass® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCards[cardListAlaskaIHG[12]] = `<a href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAmericanIHG[12]] = `<a href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListDeltaIHG[12]] = `<a href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListJetBlueIHG[12]] = `<a href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListSouthwestIHG[12]] = `<a href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListUnitedIHG[12]] = `<a href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAlaskaHilton[12]] = `<a href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAmericanHilton[12]] = `<a href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListDeltaHilton[12]] = `<a href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListJetBlueHilton[12]] = `<a href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListSouthwestHilton[12]] = `<a href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListUnitedHilton[12]] = `<a href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAlaskaHyatt[12]] = `<a href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAmericanHyatt[12]] = `<a href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListDeltaHyatt[12]] = `<a href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListJetBlueHyatt[12]] = `<a href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListSouthwestHyatt[12]] = `<a href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListUnitedHyatt[12]] = `<a href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAlaskaMarriott[12]] = `<a href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListAmericanMarriott[12]] = `<a href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListDeltaMarriott[12]] = `<a href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListJetBlueMarriott[12]] = `<a href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListSouthwestMarriott[12]] = `<a href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListUnitedMarriott[12]] = `<a href=\"${hiltonAspireLink}\">Hilton Honors Aspire Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCards[cardListAlaskaIHG[13]] = `<a href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAmericanIHG[13]] = `<a href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListDeltaIHG[13]] = `<a href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListJetBlueIHG[13]] = `<a href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListSouthwestIHG[13]] = `<a href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListUnitedIHG[13]] = `<a href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAlaskaHilton[13]] = `<a href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAmericanHilton[13]] = `<a href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListDeltaHilton[13]] = `<a href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListJetBlueHilton[13]] = `<a href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListSouthwestHilton[13]] = `<a href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListUnitedHilton[13]] = `<a href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAlaskaHyatt[13]] = `<a href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAmericanHyatt[13]] = `<a href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListDeltaHyatt[13]] = `<a href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListJetBlueHyatt[13]] = `<a href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListSouthwestHyatt[13]] = `<a href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListUnitedHyatt[13]] = `<a href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAlaskaMarriott[13]] = `<a href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListAmericanMarriott[13]] = `<a href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListDeltaMarriott[13]] = `<a href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListJetBlueMarriott[13]] = `<a href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListSouthwestMarriott[13]] = `<a href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListUnitedMarriott[13]] = `<a href=\"${marriottBoldLink}\">Marriott Bonvoy Bold® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCards[cardListAlaskaIHG[14]] = `<a href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAmericanIHG[14]] = `<a href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListDeltaIHG[14]] = `<a href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListJetBlueIHG[14]] = `<a href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListSouthwestIHG[14]] = `<a href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListUnitedIHG[14]] = `<a href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAlaskaHilton[14]] = `<a href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAmericanHilton[14]] = `<a href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListDeltaHilton[14]] = `<a href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListJetBlueHilton[14]] = `<a href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListSouthwestHilton[14]] = `<a href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListUnitedHilton[14]] = `<a href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAlaskaHyatt[14]] = `<a href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAmericanHyatt[14]] = `<a href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListDeltaHyatt[14]] = `<a href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListJetBlueHyatt[14]] = `<a href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListSouthwestHyatt[14]] = `<a href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListUnitedHyatt[14]] = `<a href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAlaskaMarriott[14]] = `<a href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListAmericanMarriott[14]] = `<a href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListDeltaMarriott[14]] = `<a href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListJetBlueMarriott[14]] = `<a href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListSouthwestMarriott[14]] = `<a href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListUnitedMarriott[14]] = `<a href=\"${marriottBoundlessLink}\">Marriott Bonvoy Boundless® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCards[cardListAlaskaIHG[15]] = `<a href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAmericanIHG[15]] = `<a href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListDeltaIHG[15]] = `<a href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListJetBlueIHG[15]] = `<a href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListSouthwestIHG[15]] = `<a href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListUnitedIHG[15]] = `<a href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAlaskaHilton[15]] = `<a href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAmericanHilton[15]] = `<a href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListDeltaHilton[15]] = `<a href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListJetBlueHilton[15]] = `<a href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListSouthwestHilton[15]] = `<a href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListUnitedHilton[15]] = `<a href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAlaskaHyatt[15]] = `<a href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAmericanHyatt[15]] = `<a href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListDeltaHyatt[15]] = `<a href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListJetBlueHyatt[15]] = `<a href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListSouthwestHyatt[15]] = `<a href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListUnitedHyatt[15]] = `<a href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAlaskaMarriott[15]] = `<a href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListAmericanMarriott[15]] = `<a href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListDeltaMarriott[15]] = `<a href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListJetBlueMarriott[15]] = `<a href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListSouthwestMarriott[15]] = `<a href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListUnitedMarriott[15]] = `<a href=\"${marriottBrilliantLink}\">Marriott Bonvoy Brilliant® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCards[cardListAlaskaIHG[16]] = `<a href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAmericanIHG[16]] = `<a href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListDeltaIHG[16]] = `<a href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListJetBlueIHG[16]] = `<a href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListSouthwestIHG[16]] = `<a href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListUnitedIHG[16]] = `<a href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAlaskaHilton[16]] = `<a href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAmericanHilton[16]] = `<a href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListDeltaHilton[16]] = `<a href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListJetBlueHilton[16]] = `<a href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListSouthwestHilton[16]] = `<a href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListUnitedHilton[16]] = `<a href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAlaskaHyatt[16]] = `<a href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAmericanHyatt[16]] = `<a href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListDeltaHyatt[16]] = `<a href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListJetBlueHyatt[16]] = `<a href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListSouthwestHyatt[16]] = `<a href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListUnitedHyatt[16]] = `<a href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAlaskaMarriott[16]] = `<a href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListAmericanMarriott[16]] = `<a href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListDeltaMarriott[16]] = `<a href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListJetBlueMarriott[16]] = `<a href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListSouthwestMarriott[16]] = `<a href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListUnitedMarriott[16]] = `<a href=\"${chasePreferredLink}\">Chase Sapphire Preferred® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  creditCards[cardListAlaskaIHG[17]] = `<a href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAmericanIHG[17]] = `<a href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListDeltaIHG[17]] = `<a href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListJetBlueIHG[17]] = `<a href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListSouthwestIHG[17]] = `<a href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListUnitedIHG[17]] = `<a href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  creditCards[cardListAlaskaHilton[17]] = `<a href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAmericanHilton[17]] = `<a href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListDeltaHilton[17]] = `<a href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListJetBlueHilton[17]] = `<a href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListSouthwestHilton[17]] = `<a href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListUnitedHilton[17]] = `<a href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  creditCards[cardListAlaskaHyatt[17]] = `<a href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAmericanHyatt[17]] = `<a href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListDeltaHyatt[17]] = `<a href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListJetBlueHyatt[17]] = `<a href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListSouthwestHyatt[17]] = `<a href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListUnitedHyatt[17]] = `<a href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  creditCards[cardListAlaskaMarriott[17]] = `<a href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListAmericanMarriott[17]] = `<a href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListDeltaMarriott[17]] = `<a href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListJetBlueMarriott[17]] = `<a href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListSouthwestMarriott[17]] = `<a href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  creditCards[cardListUnitedMarriott[17]] = `<a href=\"${chaseReserveLink}\">Chase Sapphire Reserve® Card</a> - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  cardListAlaskaIHG[
    18] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Plus Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListAmericanIHG[
    18] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Plus Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListDeltaIHG[
    18] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Plus Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListJetBlueIHG[
    18] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Plus Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListSouthwestIHG[
    18] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Plus Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListUnitedIHG[
    18] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Plus Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListAlaskaHilton[
    18] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Plus Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListAmericanHilton[
    18] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Plus Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListDeltaHilton[
    18] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Plus Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListJetBlueHilton[
    18] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Plus Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListSouthwestHilton[
    18] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Plus Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListUnitedHilton[
    18] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Plus Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListAlaskaHyatt[
    18] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Plus Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListAmericanHyatt[
    18] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Plus Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListDeltaHyatt[
    18] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Plus Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListJetBlueHyatt[
    18] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Plus Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListSouthwestHyatt[
    18] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Plus Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListUnitedHyatt[
    18] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Plus Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListAlaskaMarriott[
    18] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Plus Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListAmericanMarriott[
    18] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Plus Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListDeltaMarriott[
    18] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Plus Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListJetBlueMarriott[
    18] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Plus Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListSouthwestMarriott[
    18] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Plus Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListUnitedMarriott[
    18] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Plus Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  cardListAlaskaIHG[
    19] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Priority Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListAmericanIHG[
    19] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Priority Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListDeltaIHG[
    19] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Priority Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListJetBlueIHG[
    19] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Priority Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListSouthwestIHG[
    19] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Priority Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListUnitedIHG[
    19] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Priority Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListAlaskaHilton[
    19] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Priority Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListAmericanHilton[
    19] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Priority Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListDeltaHilton[
    19] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Priority Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListJetBlueHilton[
    19] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Priority Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListSouthwestHilton[
    19] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Priority Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListUnitedHilton[
    19] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Priority Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListAlaskaHyatt[
    19] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Priority Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListAmericanHyatt[
    19] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Priority Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListDeltaHyatt[
    19] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Priority Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListJetBlueHyatt[
    19] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Priority Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListSouthwestHyatt[
    19] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Priority Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListUnitedHyatt[
    19] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Priority Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListAlaskaMarriott[
    19] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Priority Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListAmericanMarriott[
    19] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Priority Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListDeltaMarriott[
    19] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Priority Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListJetBlueMarriott[
    19] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Priority Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListSouthwestMarriott[
    19] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Priority Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListUnitedMarriott[
    19] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Priority Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  cardListAlaskaIHG[
    20] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Premier Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListAmericanIHG[
    20] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Premier Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListDeltaIHG[
    20] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Premier Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListJetBlueIHG[
    20] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Premier Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListSouthwestIHG[
    20] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Premier Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListUnitedIHG[
    20] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Premier Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListAlaskaHilton[
    20] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Premier Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListAmericanHilton[
    20] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Premier Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListDeltaHilton[
    20] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Premier Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListJetBlueHilton[
    20] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Premier Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListSouthwestHilton[
    20] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Premier Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListUnitedHilton[
    20] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Premier Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListAlaskaHyatt[
    20] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Premier Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListAmericanHyatt[
    20] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Premier Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListDeltaHyatt[
    20] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Premier Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListJetBlueHyatt[
    20] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Premier Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListSouthwestHyatt[
    20] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Premier Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListUnitedHyatt[
    20] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Premier Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListAlaskaMarriott[
    20] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Premier Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListAmericanMarriott[
    20] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Premier Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListDeltaMarriott[
    20] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Premier Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListJetBlueMarriott[
    20] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Premier Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListSouthwestMarriott[
    20] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Premier Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListUnitedMarriott[
    20] = `<a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards Premier Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  cardListAlaskaIHG[
    21] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Gateway Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListAmericanIHG[
    21] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Gateway Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListDeltaIHG[
    21] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Gateway Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListJetBlueIHG[
    21] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Gateway Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListSouthwestIHG[
    21] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Gateway Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListUnitedIHG[
    21] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Gateway Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListAlaskaHilton[
    21] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Gateway Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListAmericanHilton[
    21] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Gateway Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListDeltaHilton[
    21] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Gateway Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListJetBlueHilton[
    21] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Gateway Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListSouthwestHilton[
    21] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Gateway Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListUnitedHilton[
    21] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Gateway Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListAlaskaHyatt[
    21] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Gateway Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListAmericanHyatt[
    21] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Gateway Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListDeltaHyatt[
    21] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Gateway Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListJetBlueHyatt[
    21] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Gateway Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListSouthwestHyatt[
    21] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Gateway Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListUnitedHyatt[
    21] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Gateway Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListAlaskaMarriott[
    21] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Gateway Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListAmericanMarriott[
    21] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Gateway Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListDeltaMarriott[
    21] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Gateway Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListJetBlueMarriott[
    21] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Gateway Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListSouthwestMarriott[
    21] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Gateway Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListUnitedMarriott[
    21] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Gateway Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  cardListAlaskaIHG[
    22] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Explorer Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListAmericanIHG[
    22] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Explorer Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListDeltaIHG[
    22] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Explorer Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListJetBlueIHG[
    22] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Explorer Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListSouthwestIHG[
    22] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Explorer Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListUnitedIHG[
    22] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Explorer Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListAlaskaHilton[
    22] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Explorer Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListAmericanHilton[
    22] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Explorer Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListDeltaHilton[
    22] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Explorer Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListJetBlueHilton[
    22] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Explorer Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListSouthwestHilton[
    22] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Explorer Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListUnitedHilton[
    22] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Explorer Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListAlaskaHyatt[
    22] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Explorer Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListAmericanHyatt[
    22] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Explorer Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListDeltaHyatt[
    22] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Explorer Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListJetBlueHyatt[
    22] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Explorer Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListSouthwestHyatt[
    22] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Explorer Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListUnitedHyatt[
    22] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Explorer Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListAlaskaMarriott[
    22] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Explorer Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListAmericanMarriott[
    22] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Explorer Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListDeltaMarriott[
    22] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Explorer Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListJetBlueMarriott[
    22] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Explorer Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListSouthwestMarriott[
    22] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Explorer Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListUnitedMarriott[
    22] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Explorer Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  cardListAlaskaIHG[
    23] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Quest Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListAmericanIHG[
    23] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Quest Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListDeltaIHG[
    23] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Quest Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListJetBlueIHG[
    23] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Quest Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListSouthwestIHG[
    23] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Quest Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListUnitedIHG[
    23] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Quest Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListAlaskaHilton[
    23] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Quest Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListAmericanHilton[
    23] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Quest Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListDeltaHilton[
    23] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Quest Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListJetBlueHilton[
    23] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Quest Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListSouthwestHilton[
    23] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Quest Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListUnitedHilton[
    23] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Quest Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListAlaskaHyatt[
    23] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Quest Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListAmericanHyatt[
    23] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Quest Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListDeltaHyatt[
    23] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Quest Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListJetBlueHyatt[
    23] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Quest Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListSouthwestHyatt[
    23] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Quest Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListUnitedHyatt[
    23] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Quest Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListAlaskaMarriott[
    23] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Quest Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListAmericanMarriott[
    23] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Quest Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListDeltaMarriott[
    23] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Quest Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListJetBlueMarriott[
    23] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Quest Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListSouthwestMarriott[
    23] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Quest Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListUnitedMarriott[
    23] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Quest Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  cardListAlaskaIHG[
    24] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Club Infinite Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListAmericanIHG[
    24] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Club Infinite Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListDeltaIHG[
    24] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Club Infinite Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListJetBlueIHG[
    24] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Club Infinite Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListSouthwestIHG[
    24] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Club Infinite Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListUnitedIHG[
    24] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Club Infinite Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListAlaskaHilton[
    24] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Club Infinite Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListAmericanHilton[
    24] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Club Infinite Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListDeltaHilton[
    24] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Club Infinite Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListJetBlueHilton[
    24] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Club Infinite Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListSouthwestHilton[
    24] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Club Infinite Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListUnitedHilton[
    24] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Club Infinite Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListAlaskaHyatt[
    24] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Club Infinite Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListAmericanHyatt[
    24] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Club Infinite Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListDeltaHyatt[
    24] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Club Infinite Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListJetBlueHyatt[
    24] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Club Infinite Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListSouthwestHyatt[
    24] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Club Infinite Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListUnitedHyatt[
    24] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Club Infinite Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListAlaskaMarriott[
    24] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Club Infinite Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListAmericanMarriott[
    24] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Club Infinite Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListDeltaMarriott[
    24] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Club Infinite Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListJetBlueMarriott[
    24] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Club Infinite Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListSouthwestMarriott[
    24] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Club Infinite Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListUnitedMarriott[
    24] = `<a href=\"${unitedLink}\">United Airlines MileagePlus®</a> Club Infinite Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  cardListAlaskaIHG[
    25] = `IHG Traveler Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListAmericanIHG[
    25] = `IHG Traveler Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListDeltaIHG[
    25] = `IHG Traveler Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListJetBlueIHG[
    25] = `IHG Traveler Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListSouthwestIHG[
    25] = `IHG Traveler Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListUnitedIHG[
    25] = `IHG Traveler Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListAlaskaHilton[
    25] = `IHG Traveler Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListAmericanHilton[
    25] = `IHG Traveler Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListDeltaHilton[
    25] = `IHG Traveler Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListJetBlueHilton[
    25] = `IHG Traveler Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListSouthwestHilton[
    25] = `IHG Traveler Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListUnitedHilton[
    25] = `IHG Traveler Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListAlaskaHyatt[
    25] = `IHG Traveler Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListAmericanHyatt[
    25] = `IHG Traveler Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListDeltaHyatt[
    25] = `IHG Traveler Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListJetBlueHyatt[
    25] = `IHG Traveler Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListSouthwestHyatt[
    25] = `IHG Traveler Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListUnitedHyatt[
    25] = `IHG Traveler Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListAlaskaMarriott[
    25] = `IHG Traveler Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListAmericanMarriott[
    25] = `IHG Traveler Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListDeltaMarriott[
    25] = `IHG Traveler Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListJetBlueMarriott[
    25] = `IHG Traveler Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListSouthwestMarriott[
    25] = `IHG Traveler Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListUnitedMarriott[
    25] = `IHG Traveler Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  cardListAlaskaIHG[
    26] = `IHG Premier Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListAmericanIHG[
    26] = `IHG Premier Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListDeltaIHG[
    26] = `IHG Premier Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListJetBlueIHG[
    26] = `IHG Premier Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListSouthwestIHG[
    26] = `IHG Premier Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListUnitedIHG[
    26] = `IHG Premier Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListAlaskaHilton[
    26] = `IHG Premier Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListAmericanHilton[
    26] = `IHG Premier Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListDeltaHilton[
    26] = `IHG Premier Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListJetBlueHilton[
    26] = `IHG Premier Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListSouthwestHilton[
    26] = `IHG Premier Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListUnitedHilton[
    26] = `IHG Premier Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListAlaskaHyatt[
    26] = `IHG Premier Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListAmericanHyatt[
    26] = `IHG Premier Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListDeltaHyatt[
    26] = `IHG Premier Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListJetBlueHyatt[
    26] = `IHG Premier Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListSouthwestHyatt[
    26] = `IHG Premier Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListUnitedHyatt[
    26] = `IHG Premier Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListAlaskaMarriott[
    26] = `IHG Premier Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListAmericanMarriott[
    26] = `IHG Premier Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListDeltaMarriott[
    26] = `IHG Premier Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListJetBlueMarriott[
    26] = `IHG Premier Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListSouthwestMarriott[
    26] = `IHG Premier Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListUnitedMarriott[
    26] = `IHG Premier Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  cardListAlaskaIHG[
    27] = `<a href=\"${hyattLink}\">World Of Hyatt®</a> Credit Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListAmericanIHG[
    27] = `<a href=\"${hyattLink}\">World Of Hyatt®</a> Credit Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListDeltaIHG[
    27] = `<a href=\"${hyattLink}\">World Of Hyatt®</a> Credit Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListJetBlueIHG[
    27] = `<a href=\"${hyattLink}\">World Of Hyatt®</a> Credit Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListSouthwestIHG[
    27] = `<a href=\"${hyattLink}\">World Of Hyatt®</a> Credit Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListUnitedIHG[
    27] = `<a href=\"${hyattLink}\">World Of Hyatt®</a> Credit Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListAlaskaHilton[
    27] = `<a href=\"${hyattLink}\">World Of Hyatt®</a> Credit Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListAmericanHilton[
    27] = `<a href=\"${hyattLink}\">World Of Hyatt®</a> Credit Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListDeltaHilton[
    27] = `<a href=\"${hyattLink}\">World Of Hyatt®</a> Credit Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListJetBlueHilton[
    27] = `<a href=\"${hyattLink}\">World Of Hyatt®</a> Credit Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListSouthwestHilton[
    27] = `<a href=\"${hyattLink}\">World Of Hyatt®</a> Credit Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListUnitedHilton[
    27] = `<a href=\"${hyattLink}\">World Of Hyatt®</a> Credit Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListAlaskaHyatt[
    27] = `<a href=\"${hyattLink}\">World Of Hyatt®</a> Credit Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListAmericanHyatt[
    27] = `<a href=\"${hyattLink}\">World Of Hyatt®</a> Credit Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListDeltaHyatt[
    27] = `<a href=\"${hyattLink}\">World Of Hyatt®</a> Credit Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListJetBlueHyatt[
    27] = `<a href=\"${hyattLink}\">World Of Hyatt®</a> Credit Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListSouthwestHyatt[
    27] = `<a href=\"${hyattLink}\">World Of Hyatt®</a> Credit Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListUnitedHyatt[
    27] = `<a href=\"${hyattLink}\">World Of Hyatt®</a> Credit Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListAlaskaMarriott[
    27] = `<a href=\"${hyattLink}\">World Of Hyatt®</a> Credit Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListAmericanMarriott[
    27] = `<a href=\"${hyattLink}\">World Of Hyatt®</a> Credit Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListDeltaMarriott[
    27] = `<a href=\"${hyattLink}\">World Of Hyatt®</a> Credit Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListJetBlueMarriott[
    27] = `<a href=\"${hyattLink}\">World Of Hyatt®</a> Credit Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListSouthwestMarriott[
    27] = `<a href=\"${hyattLink}\">World Of Hyatt®</a> Credit Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListUnitedMarriott[
    27] = `<a href=\"${hyattLink}\">World Of Hyatt®</a> Credit Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  cardListAlaskaIHG[
    28] = `Citi Premier Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListAmericanIHG[
    28] = `Citi Premier Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListDeltaIHG[
    28] = `Citi Premier Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListJetBlueIHG[
    28] = `Citi Premier Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListSouthwestIHG[
    28] = `Citi Premier Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListUnitedIHG[
    28] = `Citi Premier Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListAlaskaHilton[
    28] = `Citi Premier Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListAmericanHilton[
    28] = `Citi Premier Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListDeltaHilton[
    28] = `Citi Premier Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListJetBlueHilton[
    28] = `Citi Premier Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListSouthwestHilton[
    28] = `Citi Premier Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListUnitedHilton[
    28] = `Citi Premier Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListAlaskaHyatt[
    28] = `Citi Premier Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListAmericanHyatt[
    28] = `Citi Premier Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListDeltaHyatt[
    28] = `Citi Premier Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListJetBlueHyatt[
    28] = `Citi Premier Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListSouthwestHyatt[
    28] = `Citi Premier Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListUnitedHyatt[
    28] = `Citi Premier Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListAlaskaMarriott[
    28] = `Citi Premier Card - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListAmericanMarriott[
    28] = `Citi Premier Card - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListDeltaMarriott[
    28] = `Citi Premier Card - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListJetBlueMarriott[
    28] = `Citi Premier Card - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListSouthwestMarriott[
    28] = `Citi Premier Card - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListUnitedMarriott[
    28] = `Citi Premier Card - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  cardListAlaskaIHG[
    29] = `<a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> MileUp Mastercard - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListAmericanIHG[
    29] = `<a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> MileUp Mastercard - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListDeltaIHG[
    29] = `<a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> MileUp Mastercard - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListJetBlueIHG[
    29] = `<a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> MileUp Mastercard - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListSouthwestIHG[
    29] = `<a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> MileUp Mastercard - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListUnitedIHG[
    29] = `<a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> MileUp Mastercard - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListAlaskaHilton[
    29] = `<a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> MileUp Mastercard - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListAmericanHilton[
    29] = `<a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> MileUp Mastercard - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListDeltaHilton[
    29] = `<a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> MileUp Mastercard - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListJetBlueHilton[
    29] = `<a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> MileUp Mastercard - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListSouthwestHilton[
    29] = `<a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> MileUp Mastercard - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListUnitedHilton[
    29] = `<a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> MileUp Mastercard - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListAlaskaHyatt[
    29] = `<a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> MileUp Mastercard - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListAmericanHyatt[
    29] = `<a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> MileUp Mastercard - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListDeltaHyatt[
    29] = `<a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> MileUp Mastercard - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListJetBlueHyatt[
    29] = `<a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> MileUp Mastercard - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListSouthwestHyatt[
    29] = `<a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> MileUp Mastercard - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListUnitedHyatt[
    29] = `<a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> MileUp Mastercard - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListAlaskaMarriott[
    29] = `<a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> MileUp Mastercard - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListAmericanMarriott[
    29] = `<a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> MileUp Mastercard - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListDeltaMarriott[
    29] = `<a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> MileUp Mastercard - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListJetBlueMarriott[
    29] = `<a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> MileUp Mastercard - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListSouthwestMarriott[
    29] = `<a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> MileUp Mastercard - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListUnitedMarriott[
    29] = `<a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> MileUp Mastercard - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  cardListAlaskaIHG[
    30] = `Citi AAdvantage Platinum Select World Elite Mastercard - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListAmericanIHG[
    30] = `Citi AAdvantage Platinum Select World Elite Mastercard - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListDeltaIHG[
    30] = `Citi AAdvantage Platinum Select World Elite Mastercard - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListJetBlueIHG[
    30] = `Citi AAdvantage Platinum Select World Elite Mastercard - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListSouthwestIHG[
    30] = `Citi AAdvantage Platinum Select World Elite Mastercard - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListUnitedIHG[
    30] = `Citi AAdvantage Platinum Select World Elite Mastercard - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListAlaskaHilton[
    30] = `Citi AAdvantage Platinum Select World Elite Mastercard - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListAmericanHilton[
    30] = `Citi AAdvantage Platinum Select World Elite Mastercard - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListDeltaHilton[
    30] = `Citi AAdvantage Platinum Select World Elite Mastercard - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListJetBlueHilton[
    30] = `Citi AAdvantage Platinum Select World Elite Mastercard - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListSouthwestHilton[
    30] = `Citi AAdvantage Platinum Select World Elite Mastercard - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListUnitedHilton[
    30] = `Citi AAdvantage Platinum Select World Elite Mastercard - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListAlaskaHyatt[
    30] = `Citi AAdvantage Platinum Select World Elite Mastercard - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListAmericanHyatt[
    30] = `Citi AAdvantage Platinum Select World Elite Mastercard - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListDeltaHyatt[
    30] = `Citi AAdvantage Platinum Select World Elite Mastercard - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListJetBlueHyatt[
    30] = `Citi AAdvantage Platinum Select World Elite Mastercard - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListSouthwestHyatt[
    30] = `Citi AAdvantage Platinum Select World Elite Mastercard - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListUnitedHyatt[
    30] = `Citi AAdvantage Platinum Select World Elite Mastercard - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListAlaskaMarriott[
    30] = `Citi AAdvantage Platinum Select World Elite Mastercard - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListAmericanMarriott[
    30] = `Citi AAdvantage Platinum Select World Elite Mastercard - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListDeltaMarriott[
    30] = `Citi AAdvantage Platinum Select World Elite Mastercard - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListJetBlueMarriott[
    30] = `Citi AAdvantage Platinum Select World Elite Mastercard - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListSouthwestMarriott[
    30] = `Citi AAdvantage Platinum Select World Elite Mastercard - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListUnitedMarriott[
    30] = `Citi AAdvantage Platinum Select World Elite Mastercard - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  cardListAlaskaIHG[
    31] = `Citi AAdvantage Executive World Elite Mastercard - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListAmericanIHG[
    31] = `Citi AAdvantage Executive World Elite Mastercard - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListDeltaIHG[
    31] = `Citi AAdvantage Executive World Elite Mastercard - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListJetBlueIHG[
    31] = `Citi AAdvantage Executive World Elite Mastercard - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListSouthwestIHG[
    31] = `Citi AAdvantage Executive World Elite Mastercard - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListUnitedIHG[
    31] = `Citi AAdvantage Executive World Elite Mastercard - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${ihgLink}\">IHG® Rewards</a> rewards program`
  cardListAlaskaHilton[
    31] = `Citi AAdvantage Executive World Elite Mastercard - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListAmericanHilton[
    31] = `Citi AAdvantage Executive World Elite Mastercard - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListDeltaHilton[
    31] = `Citi AAdvantage Executive World Elite Mastercard - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListJetBlueHilton[
    31] = `Citi AAdvantage Executive World Elite Mastercard - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListSouthwestHilton[
    31] = `Citi AAdvantage Executive World Elite Mastercard - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListUnitedHilton[
    31] = `Citi AAdvantage Executive World Elite Mastercard - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hiltonLink}\">Hilton Honors®</a> rewards program`
  cardListAlaskaHyatt[
    31] = `Citi AAdvantage Executive World Elite Mastercard - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListAmericanHyatt[
    31] = `Citi AAdvantage Executive World Elite Mastercard - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListDeltaHyatt[
    31] = `Citi AAdvantage Executive World Elite Mastercard - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListJetBlueHyatt[
    31] = `Citi AAdvantage Executive World Elite Mastercard - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListSouthwestHyatt[
    31] = `Citi AAdvantage Executive World Elite Mastercard - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListUnitedHyatt[
    31] = `Citi AAdvantage Executive World Elite Mastercard - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${hyattLink}\">World Of Hyatt®</a> rewards program`
  cardListAlaskaMarriott[
    31] = `Citi AAdvantage Executive World Elite Mastercard - Using the <a href=\"${alaskaMileageLink}\">Alaska Airlines® Mileage Plan™</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListAmericanMarriott[
    31] = `Citi AAdvantage Executive World Elite Mastercard - Using the <a href=\"${americanAAdvantageLink}\">American Airlines AAdvantage®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListDeltaMarriott[
    31] = `Citi AAdvantage Executive World Elite Mastercard - Using the <a href=\"${deltaSkyMilesLink}\">Delta Airlines SkyMiles®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListJetBlueMarriott[
    31] = `Citi AAdvantage Executive World Elite Mastercard - Using the <a href=\"${jetblueLink}\">JetBlue Airways TrueBlue®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListSouthwestMarriott[
    31] = `Citi AAdvantage Executive World Elite Mastercard - Using the <a href=\"${southwestLink}\">Southwest Airlines Rapid Rewards®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`
  cardListUnitedMarriott[
    31] = `Citi AAdvantage Executive World Elite Mastercard - Using the <a href=\"${unitedLink}\">United Airlines MileagePlus®</a> rewards program and the <a href=\"${marriottLink}\">Marriott Bonvoy® Rewards</a> rewards program`

  cardListAlaskaIHG.sort()
  cardListAlaskaIHG.reverse()
  cardListAmericanIHG.sort()
  cardListAmericanIHG.reverse()
  cardListDeltaIHG.sort()
  cardListDeltaIHG.reverse()
  cardListJetBlueIHG.sort()
  cardListJetBlueIHG.reverse()
  cardListSouthwestIHG.sort()
  cardListSouthwestIHG.reverse()
  cardListUnitedIHG.sort()
  cardListUnitedIHG.reverse()

  cardListAlaskaHilton.sort()
  cardListAlaskaHilton.reverse()
  cardListAmericanHilton.sort()
  cardListAmericanHilton.reverse()
  cardListDeltaHilton.sort()
  cardListDeltaHilton.reverse()
  cardListJetBlueHilton.sort()
  cardListJetBlueHilton.reverse()
  cardListSouthwestHilton.sort()
  cardListSouthwestHilton.reverse()
  cardListUnitedHilton.sort()
  cardListUnitedHilton.reverse()

  cardListAlaskaHyatt.sort()
  cardListAlaskaHyatt.reverse()
  cardListAmericanHyatt.sort()
  cardListAmericanHyatt.reverse()
  cardListDeltaHyatt.sort()
  cardListDeltaHyatt.reverse()
  cardListJetBlueHyatt.sort()
  cardListJetBlueHyatt.reverse()
  cardListSouthwestHyatt.sort()
  cardListSouthwestHyatt.reverse()
  cardListUnitedHyatt.sort()
  cardListUnitedHyatt.reverse()

  cardListAlaskaMarriott.sort()
  cardListAlaskaMarriott.reverse()
  cardListAmericanMarriott.sort()
  cardListAmericanMarriott.reverse()
  cardListDeltaMarriott.sort()
  cardListDeltaMarriott.reverse()
  cardListJetBlueMarriott.sort()
  cardListJetBlueMarriott.reverse()
  cardListSouthwestMarriott.sort()
  cardListSouthwestMarriott.reverse()
  cardListUnitedMarriott.sort()
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

  cards.sort()

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

  // TODO Post to html following prints:
  let first = creditCards[cards[cards.length - 1]]
  cards.pop()
  let second = creditCards[cards[cards.length - 1]]
  cards.pop()
  let third = creditCards[cards[cards.length - 1]]

  // creditCards_budget = deepcopy(creditCards)
  // first_budget = creditCards_budget[cards_budget[0]]
  // creditCards_budget.pop(cards_budget[0])
  // second_budget = creditCards_budget[cards_budget[1]]
  // creditCards_budget.pop(cards_budget[1])
  // third_budget = creditCards_budget[cards_budget[2]]

  document.querySelector('header').innerHTML = `<h1>Your Results</h1><h3>Based on your input, these are the best rewards cards for you:</h3>`
  document.querySelector('div.field').innerHTML += `<ol><li>${first}</li><li>${second}</li><li>${third}</li></ol>`
})
