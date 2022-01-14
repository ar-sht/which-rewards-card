from copy import deepcopy


def weighted_avg(hotel, airline, weight):
    return hotel * (1 - weight) + airline * weight


# hub = 'dtw'
# air = 'value from html'
# hotel = 'value from html'
# dining = 'value from html'
# store = 'value from html'
# weight = 'value from html 0-1'
# premium = '0 or 1 from html'

port = input(
    "The code (e.g. \'DTW\') of the airport you fly out of most: ").lower()
air = float(input("Money spent on air travel in a year: $"))
hotel = float(input("Money spent on hotels in a year: $"))
dining = float(input("Money spent on dining in a year: $"))
store = float(input("Money spent at US supermarkets in a year: $"))
weight = float(input("Enter a number between 0 and 10: "))/10

ihg = 1
hilton = 1
hyatt = 1
marriott = 1
alaska = 1
american = 1
delta = 1
jetblue = 1
southwest = 1
united = 1

# TODO Ifs for each supported airport

if port == 'atl':
    alaska = 0.0100
    american = 0.0297
    delta = 0.7282
    jetblue = 0.0100
    southwest = 0.0944
    united = 0.0100
elif port == 'lax':
    alaska = 0.0862
    american = 0.2032
    delta = 0.1850
    jetblue = 0.0400
    southwest = 0.1558
    united = 0.1490
elif port == 'ord':
    alaska = 0.0300
    american = 0.2646
    delta = 0.0400
    jetblue = 0.0300
    southwest = 0.0400
    united = 0.3135
elif port == 'dfw':
    alaska = 0.0100
    american = 0.6806
    delta = 0.0373
    jetblue = 0.0100
    southwest = 0.0100
    united = 0.0100
elif port == 'den':
    alaska = 0.0200
    american = 0.0200
    delta = 0.0531
    jetblue = 0.0200
    southwest = 0.2852
    united = 0.3150
elif port == 'jfk':
    alaska = 0.0527
    american = 0.1332
    delta = 0.3316
    jetblue = 0.3633
    southwest = 0.0050
    united = 0.0050
elif port == 'sfo':
    alaska = 0.1346
    american = 0.0965
    delta = 0.1060
    jetblue = 0.0300
    southwest = 0.0300
    united = 0.4132
elif port == 'sea':
    alaska = 0.4254
    american = 0.0300
    delta = 0.1953
    jetblue = 0.0300
    southwest = 0.0644
    united = 0.0624
elif port == 'las':
    alaska = 0.0300
    american = 0.0970
    delta = 0.0970
    jetblue = 0.0300
    southwest = 0.3731
    united = 0.0880
elif port == 'mco':
    alaska = 0.0400
    american = 0.1301
    delta = 0.1489
    jetblue = 0.1193
    southwest = 0.2483
    united = 0.0400
elif port == 'clt':
    alaska = 0.0300
    american = 0.5959
    delta = 0.0295
    jetblue = 0.0010
    southwest = 0.0155
    united = 0.0010
elif port == 'ewr':
    alaska = 0.0200
    american = 0.0688
    delta = 0.0422
    jetblue = 0.0640
    southwest = 0.0200
    united = 0.5120
elif port == 'phx':
    alaska = 0.0200
    american = 0.3746
    delta = 0.0650
    jetblue = 0.0200
    southwest = 0.3507
    united = 0.0501
elif port == 'mia':
    alaska = 0.0100
    american = 0.6861
    delta = 0.1162
    jetblue = 0.0100
    southwest = 0.0100
    united = 0.0575
elif port == 'iah':
    alaska = 0.0300
    american = 0.0620
    delta = 0.0300
    jetblue = 0.0300
    southwest = 0.0300
    united = 0.5089
elif port == 'bos':
    alaska = 0.0300
    american = 0.1829
    delta = 0.1557
    jetblue = 0.3279
    southwest = 0.0741
    united = 0.1109
elif port == 'msp':
    alaska = 0.0200
    american = 0.0497
    delta = 0.5355
    jetblue = 0.0200
    southwest = 0.0518
    united = 0.0200
elif port == 'dtw':
    alaska = 0.0200
    american = 0.0200
    delta = 0.4951
    jetblue = 0.0200
    southwest = 0.0417
    united = 0.0200
elif port == 'fll':
    alaska = 0.0200
    american = 0.0200
    delta = 0.1313
    jetblue = 0.2150
    southwest = 0.2126
    united = 0.0768
elif port == 'phl':
    alaska = 0.0200
    american = 0.4432
    delta = 0.0200
    jetblue = 0.0200
    southwest = 0.0748
    united = 0.0200


def amex_plat(air, hotel, dining, store):
    if dining <= 23_000:
        return dining * 10 + (air + hotel) * 5 + store - 695 * 100 + 15_000 + 800 * 100
    else:
        return (dining - 23_000) + 230_000 + (air + hotel) * 5 + store - 695 * 100 + 15_000 + 800 * 100


def amex_gold(air, hotel, dining, store):
    if store <= 25_000:
        return dining * 4 + store * 4 + air * 3 + hotel - 250 * 100 + 320 * 100
    else:
        return 100_000 + dining * 4 + (store - 25_000) * 4 + air * 3 + hotel - 250 * 100 + 320 * 100


def amex_green(air, hotel, dining, store):
    return dining * 3 + air * 1.5 + (air + hotel) * 3 + store - 150 * 100 + 200 * 100


def amex_ed(air, hotel, dining, store):
    if store <= 6_000:
        return (dining + store * 2 + air + hotel) * (11 / 10) + 10 * 100
    else:
        return (12_000 + dining + (store - 6_000) + air + hotel) * (11 / 10) + 10 * 100


def amex_edp(air, hotel, dining, store):
    if store <= 6_000:
        return (dining + store * 4 + air + hotel) * (12.5 / 10) - 95 * 100 + 80 * 100
    else:
        return (12_000 + dining + (store - 6_000) + air + hotel + store) * (12.5 / 10) - 95 * 100 + 80 * 100


def amex_blue(air, hotel, dining, store):
    return dining + store * 1.5 + air + hotel + 10 * 100


def del_blue(air, hotel, dining, store):
    return dining * 2 + air * 2 * delta + 1.5 * store + hotel + 20 * 100


def del_gold(air, hotel, dining, store):
    return dining * 2 + store * 2.5 + air * 2 * delta + hotel - 99 * 100 + 80 * 100


def del_plat(air, hotel, dining, store):
    return hotel * 3 + air * 3 * delta + dining * 3 + store * 3.5 - 250 * 100 + 280 * 100


def del_res(air, hotel, dining, store):
    return air * 3.5 * delta + hotel + 1.5 * store + dining - 550 * 100 + 650 * 100


def hil_hon(air, hotel, dining, store):
    return air * 3 + hotel * hilton * 7 + dining * 5 + store * 7.5 + 70 * 100


def hil_sur(air, hotel, dining, store):
    return air * 3 + hotel * hilton * 12 + dining * 6 + store * 9 - 95 * 100 + 150 * 100


def hil_asp(air, hotel, dining, store):
    return air * 7 + hotel * hilton * 14 + dining * 6 + store * 4.5 - 450 * 100 + 700 * 100


def mar_bold(air, hotel, dining, store):
    return hotel * marriott * 14 + air * 3 + dining + store * 1.5 + 60 * 100


def mar_bound(air, hotel, dining, store):
    return hotel * marriott * 17 + air * 2 + dining * 2 + store * 3 - 95 * 100 + 125 * 100


def mar_bril(air, hotel, dining, store):
    return hotel * marriott * 20 + (air + dining) * 3 + store * 3 - 450 * 100 + 550 * 100


def chase_pref(air, hotel, dining, store):
    return (air + hotel) * 5 * 0.9 + (
        air + hotel) * 2 * 0.1 + dining * 3 + store * 3 * 0.1 + 0.05 * 3 * hotel - 95 * 100 + 120 * 100


def chase_res(air, hotel, dining, store):
    return hotel * 11 + air * 3 + dining * 3 * 0.99 + dining * 10 * 0.01 + store - 550 * 100 + 650 * 100


def sw_plus(air, hotel, dining, store):
    return air * 2 * southwest + air * 0.1 * 2 + hotel * 0.05 * 2 + hotel + dining + store - 69 * 100 + 60 * 100


def sw_pri(air, hotel, dining, store):
    return air * 3 * southwest + air * 0.1 * 2 + hotel * 0.05 * 2 + hotel + dining + store - 149 * 100 + 160 * 100


def sw_prem(air, hotel, dining, store):
    return air * 3 * southwest + air * 0.1 * 2 + hotel * 0.05 * 2 + hotel + dining + store - 99 * 100 + 110 * 100


def un_gate(air, hotel, dining, store):
    return air * 2.2 * united + 2 * store + dining + air * 2 * 0.1 + hotel + 30 * 100


def un_exp(air, hotel, dining, store):
    return air * 2.2 * united + 2 * dining + 2 * hotel + store * 1.5 - 95 * 100 + 90 * 100


def un_quest(air, hotel, dining, store):
    return air * 3.3 * united + 2 * dining + air * 3 * (
        1.1 - united) + hotel * 2 * 0.05 + store + hotel - 250 * 100 + 240 * 100


def un_inf(air, hotel, dining, store):
    return air * 4.4 * united + 2 * dining + 2 * (hotel + (1.1 - united)) + store - 525 * 100 + 550 * 100


def ihg_trav(air, hotel, dining, store):
    return hotel * 15 * ihg + air * 2 + store * 2 + dining * 2 + 40 * 100


def ihg_prem(air, hotel, dining, store):
    return hotel * 25 * ihg + air * 2 + store * 2 + dining * 2 - 89 * 100 + 110 * 100


def hyatt_card(air, hotel, dining, store):
    return hotel * 9 * hyatt + 2 * dining + 2.2 * air + store - 95 * 100 + 140 * 100


def citi_prem(air, hotel, dining, store):
    return dining * 3 + store * 4.5 + 3 * air + 3 * hotel - 95 * 100 + 130 * 100


def amer_mile(air, hotel, dining, store):
    return 2 * store + 2 * air * american + hotel + dining + 40 * 100


def amer_plat(air, hotel, dining, store):
    return 3 * air * american + 2 * dining + hotel + store - 99 * 100 + 150 * 100


def amer_exec(air, hotel, dining, store):
    return 2 * air * american + dining + hotel + store + 150 * 100 - 450 * 100


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

card_list = [amex_plat(air, hotel, dining, store), amex_gold(air, hotel, dining, store),
             amex_green(air, hotel, dining, store),
             amex_ed(air, hotel, dining, store), amex_edp(
    air, hotel, dining, store), amex_blue(air, hotel, dining, store),
    del_blue(air, hotel, dining, store), del_gold(
    air, hotel, dining, store), del_plat(air, hotel, dining, store),
    del_res(air, hotel, dining, store), hil_hon(
    air, hotel, dining, store), hil_sur(air, hotel, dining, store),
    hil_asp(air, hotel, dining, store), mar_bold(
    air, hotel, dining, store), mar_bound(air, hotel, dining, store),
    mar_bril(air, hotel, dining, store), chase_pref(
    air, hotel, dining, store), chase_res(air, hotel, dining, store),
    sw_plus(air, hotel, dining, store), sw_pri(air, hotel, dining, store), sw_prem(
    air, hotel, dining, store), un_gate(air, hotel, dining, store),
    un_exp(air, hotel, dining, store), un_quest(
        air, hotel, dining, store), un_inf(air, hotel, dining, store),
    ihg_trav(air, hotel, dining, store), ihg_prem(
        air, hotel, dining, store), hyatt_card(air, hotel, dining, store),
    citi_prem(air, hotel, dining, store), amer_mile(air, hotel, dining, store),
    amer_plat(air, hotel, dining, store), amer_exec(air, hotel, dining, store)]

card_list_ak_ihg = []
card_list_am_ihg = []
card_list_dl_ihg = []
card_list_jb_ihg = []
card_list_sw_ihg = []
card_list_un_ihg = []

card_list_ak_hil = []
card_list_am_hil = []
card_list_dl_hil = []
card_list_jb_hil = []
card_list_sw_hil = []
card_list_un_hil = []

card_list_ak_hya = []
card_list_am_hya = []
card_list_dl_hya = []
card_list_jb_hya = []
card_list_sw_hya = []
card_list_un_hya = []

card_list_ak_mar = []
card_list_am_mar = []
card_list_dl_mar = []
card_list_jb_mar = []
card_list_sw_mar = []
card_list_un_mar = []

# Amex
for score in card_list[0:6]:
    ih = 0
    hil = hilton * 2
    hy = 0
    mar = marriott
    ak = 0
    am = 0
    dl = delta
    jb = jetblue * 0.8
    sw = 0
    un = 0
    card_list_ak_ihg.append(weighted_avg(ih, ak, weight) * score)
    card_list_am_ihg.append(weighted_avg(ih, am, weight) * score)
    card_list_dl_ihg.append(weighted_avg(ih, dl, weight) * score)
    card_list_jb_ihg.append(weighted_avg(ih, jb, weight) * score)
    card_list_sw_ihg.append(weighted_avg(ih, sw, weight) * score)
    card_list_un_ihg.append(weighted_avg(ih, un, weight) * score)

    card_list_ak_hil.append(weighted_avg(hil, ak, weight) * score)
    card_list_am_hil.append(weighted_avg(hil, am, weight) * score)
    card_list_dl_hil.append(weighted_avg(hil, dl, weight) * score)
    card_list_jb_hil.append(weighted_avg(hil, jb, weight) * score)
    card_list_sw_hil.append(weighted_avg(hil, sw, weight) * score)
    card_list_un_hil.append(weighted_avg(hil, un, weight) * score)

    card_list_ak_hya.append(weighted_avg(hy, ak, weight) * score)
    card_list_am_hya.append(weighted_avg(hy, am, weight) * score)
    card_list_dl_hya.append(weighted_avg(hy, dl, weight) * score)
    card_list_jb_hya.append(weighted_avg(hy, jb, weight) * score)
    card_list_sw_hya.append(weighted_avg(hy, sw, weight) * score)
    card_list_un_hya.append(weighted_avg(hy, un, weight) * score)

    card_list_ak_mar.append(weighted_avg(mar, ak, weight) * score)
    card_list_am_mar.append(weighted_avg(mar, am, weight) * score)
    card_list_dl_mar.append(weighted_avg(mar, dl, weight) * score)
    card_list_jb_mar.append(weighted_avg(mar, jb, weight) * score)
    card_list_sw_mar.append(weighted_avg(mar, sw, weight) * score)
    card_list_un_mar.append(weighted_avg(mar, un, weight) * score)

# Delta
for score in card_list[6:10]:
    ih = 0
    hil = 0
    hy = 0
    mar = 0
    ak = 0
    am = 0
    dl = delta
    jb = 0
    sw = 0
    un = 0
    card_list_ak_ihg.append(weighted_avg(ih, ak, weight) * score)
    card_list_am_ihg.append(weighted_avg(ih, am, weight) * score)
    card_list_dl_ihg.append(weighted_avg(ih, dl, weight) * score)
    card_list_jb_ihg.append(weighted_avg(ih, jb, weight) * score)
    card_list_sw_ihg.append(weighted_avg(ih, sw, weight) * score)
    card_list_un_ihg.append(weighted_avg(ih, un, weight) * score)

    card_list_ak_hil.append(weighted_avg(hil, ak, weight) * score)
    card_list_am_hil.append(weighted_avg(hil, am, weight) * score)
    card_list_dl_hil.append(weighted_avg(hil, dl, weight) * score)
    card_list_jb_hil.append(weighted_avg(hil, jb, weight) * score)
    card_list_sw_hil.append(weighted_avg(hil, sw, weight) * score)
    card_list_un_hil.append(weighted_avg(hil, un, weight) * score)

    card_list_ak_hya.append(weighted_avg(hy, ak, weight) * score)
    card_list_am_hya.append(weighted_avg(hy, am, weight) * score)
    card_list_dl_hya.append(weighted_avg(hy, dl, weight) * score)
    card_list_jb_hya.append(weighted_avg(hy, jb, weight) * score)
    card_list_sw_hya.append(weighted_avg(hy, sw, weight) * score)
    card_list_un_hya.append(weighted_avg(hy, un, weight) * score)

    card_list_ak_mar.append(weighted_avg(mar, ak, weight) * score)
    card_list_am_mar.append(weighted_avg(mar, am, weight) * score)
    card_list_dl_mar.append(weighted_avg(mar, dl, weight) * score)
    card_list_jb_mar.append(weighted_avg(mar, jb, weight) * score)
    card_list_sw_mar.append(weighted_avg(mar, sw, weight) * score)
    card_list_un_mar.append(weighted_avg(mar, un, weight) * score)

# Hilton
for score in card_list[10:13]:
    ih = 0
    hil = hilton
    hy = 0
    mar = 0
    ak = 0
    am = 0
    dl = 0.1 * delta
    jb = 0
    sw = 0
    un = 0.1 * united
    card_list_ak_ihg.append(weighted_avg(ih, ak, weight) * score)
    card_list_am_ihg.append(weighted_avg(ih, am, weight) * score)
    card_list_dl_ihg.append(weighted_avg(ih, dl, weight) * score)
    card_list_jb_ihg.append(weighted_avg(ih, jb, weight) * score)
    card_list_sw_ihg.append(weighted_avg(ih, sw, weight) * score)
    card_list_un_ihg.append(weighted_avg(ih, un, weight) * score)

    card_list_ak_hil.append(weighted_avg(hil, ak, weight) * score)
    card_list_am_hil.append(weighted_avg(hil, am, weight) * score)
    card_list_dl_hil.append(weighted_avg(hil, dl, weight) * score)
    card_list_jb_hil.append(weighted_avg(hil, jb, weight) * score)
    card_list_sw_hil.append(weighted_avg(hil, sw, weight) * score)
    card_list_un_hil.append(weighted_avg(hil, un, weight) * score)

    card_list_ak_hya.append(weighted_avg(hy, ak, weight) * score)
    card_list_am_hya.append(weighted_avg(hy, am, weight) * score)
    card_list_dl_hya.append(weighted_avg(hy, dl, weight) * score)
    card_list_jb_hya.append(weighted_avg(hy, jb, weight) * score)
    card_list_sw_hya.append(weighted_avg(hy, sw, weight) * score)
    card_list_un_hya.append(weighted_avg(hy, un, weight) * score)

    card_list_ak_mar.append(weighted_avg(mar, ak, weight) * score)
    card_list_am_mar.append(weighted_avg(mar, am, weight) * score)
    card_list_dl_mar.append(weighted_avg(mar, dl, weight) * score)
    card_list_jb_mar.append(weighted_avg(mar, jb, weight) * score)
    card_list_sw_mar.append(weighted_avg(mar, sw, weight) * score)
    card_list_un_mar.append(weighted_avg(mar, un, weight) * score)

# Marriott
for score in card_list[13:16]:
    ih = 0
    hil = 0
    hy = 0
    mar = marriott
    ak = (1 / 3) * alaska
    am = (1 / 3) * american
    dl = (1 / 3) * delta
    jb = (1 / 6) * jetblue
    sw = (1 / 3) * southwest
    un = (1.1 / 3) * united
    card_list_ak_ihg.append(weighted_avg(ih, ak, weight) * score)
    card_list_am_ihg.append(weighted_avg(ih, am, weight) * score)
    card_list_dl_ihg.append(weighted_avg(ih, dl, weight) * score)
    card_list_jb_ihg.append(weighted_avg(ih, jb, weight) * score)
    card_list_sw_ihg.append(weighted_avg(ih, sw, weight) * score)
    card_list_un_ihg.append(weighted_avg(ih, un, weight) * score)

    card_list_ak_hil.append(weighted_avg(hil, ak, weight) * score)
    card_list_am_hil.append(weighted_avg(hil, am, weight) * score)
    card_list_dl_hil.append(weighted_avg(hil, dl, weight) * score)
    card_list_jb_hil.append(weighted_avg(hil, jb, weight) * score)
    card_list_sw_hil.append(weighted_avg(hil, sw, weight) * score)
    card_list_un_hil.append(weighted_avg(hil, un, weight) * score)

    card_list_ak_hya.append(weighted_avg(hy, ak, weight) * score)
    card_list_am_hya.append(weighted_avg(hy, am, weight) * score)
    card_list_dl_hya.append(weighted_avg(hy, dl, weight) * score)
    card_list_jb_hya.append(weighted_avg(hy, jb, weight) * score)
    card_list_sw_hya.append(weighted_avg(hy, sw, weight) * score)
    card_list_un_hya.append(weighted_avg(hy, un, weight) * score)

    card_list_ak_mar.append(weighted_avg(mar, ak, weight) * score)
    card_list_am_mar.append(weighted_avg(mar, am, weight) * score)
    card_list_dl_mar.append(weighted_avg(mar, dl, weight) * score)
    card_list_jb_mar.append(weighted_avg(mar, jb, weight) * score)
    card_list_sw_mar.append(weighted_avg(mar, sw, weight) * score)
    card_list_un_mar.append(weighted_avg(mar, un, weight) * score)

# Chase
for score in card_list[16:18]:
    ih = ihg
    hil = 0
    hy = hyatt
    mar = marriott
    ak = 0
    am = 0
    dl = 0
    jb = jetblue
    sw = southwest
    un = united
    card_list_ak_ihg.append(weighted_avg(ih, ak, weight) * score)
    card_list_am_ihg.append(weighted_avg(ih, am, weight) * score)
    card_list_dl_ihg.append(weighted_avg(ih, dl, weight) * score)
    card_list_jb_ihg.append(weighted_avg(ih, jb, weight) * score)
    card_list_sw_ihg.append(weighted_avg(ih, sw, weight) * score)
    card_list_un_ihg.append(weighted_avg(ih, un, weight) * score)

    card_list_ak_hil.append(weighted_avg(hil, ak, weight) * score)
    card_list_am_hil.append(weighted_avg(hil, am, weight) * score)
    card_list_dl_hil.append(weighted_avg(hil, dl, weight) * score)
    card_list_jb_hil.append(weighted_avg(hil, jb, weight) * score)
    card_list_sw_hil.append(weighted_avg(hil, sw, weight) * score)
    card_list_un_hil.append(weighted_avg(hil, un, weight) * score)

    card_list_ak_hya.append(weighted_avg(hy, ak, weight) * score)
    card_list_am_hya.append(weighted_avg(hy, am, weight) * score)
    card_list_dl_hya.append(weighted_avg(hy, dl, weight) * score)
    card_list_jb_hya.append(weighted_avg(hy, jb, weight) * score)
    card_list_sw_hya.append(weighted_avg(hy, sw, weight) * score)
    card_list_un_hya.append(weighted_avg(hy, un, weight) * score)

    card_list_ak_mar.append(weighted_avg(mar, ak, weight) * score)
    card_list_am_mar.append(weighted_avg(mar, am, weight) * score)
    card_list_dl_mar.append(weighted_avg(mar, dl, weight) * score)
    card_list_jb_mar.append(weighted_avg(mar, jb, weight) * score)
    card_list_sw_mar.append(weighted_avg(mar, sw, weight) * score)
    card_list_un_mar.append(weighted_avg(mar, un, weight) * score)

# Southwest
for score in card_list[18:21]:
    ih = 0
    hil = 0
    hy = 0
    mar = 0
    ak = 0
    am = 0
    dl = 0
    jb = 0
    sw = southwest
    un = 0
    card_list_ak_ihg.append(weighted_avg(ih, ak, weight) * score)
    card_list_am_ihg.append(weighted_avg(ih, am, weight) * score)
    card_list_dl_ihg.append(weighted_avg(ih, dl, weight) * score)
    card_list_jb_ihg.append(weighted_avg(ih, jb, weight) * score)
    card_list_sw_ihg.append(weighted_avg(ih, sw, weight) * score)
    card_list_un_ihg.append(weighted_avg(ih, un, weight) * score)

    card_list_ak_hil.append(weighted_avg(hil, ak, weight) * score)
    card_list_am_hil.append(weighted_avg(hil, am, weight) * score)
    card_list_dl_hil.append(weighted_avg(hil, dl, weight) * score)
    card_list_jb_hil.append(weighted_avg(hil, jb, weight) * score)
    card_list_sw_hil.append(weighted_avg(hil, sw, weight) * score)
    card_list_un_hil.append(weighted_avg(hil, un, weight) * score)

    card_list_ak_hya.append(weighted_avg(hy, ak, weight) * score)
    card_list_am_hya.append(weighted_avg(hy, am, weight) * score)
    card_list_dl_hya.append(weighted_avg(hy, dl, weight) * score)
    card_list_jb_hya.append(weighted_avg(hy, jb, weight) * score)
    card_list_sw_hya.append(weighted_avg(hy, sw, weight) * score)
    card_list_un_hya.append(weighted_avg(hy, un, weight) * score)

    card_list_ak_mar.append(weighted_avg(mar, ak, weight) * score)
    card_list_am_mar.append(weighted_avg(mar, am, weight) * score)
    card_list_dl_mar.append(weighted_avg(mar, dl, weight) * score)
    card_list_jb_mar.append(weighted_avg(mar, jb, weight) * score)
    card_list_sw_mar.append(weighted_avg(mar, sw, weight) * score)
    card_list_un_mar.append(weighted_avg(mar, un, weight) * score)

# United
for score in card_list[21:25]:
    ih = 0
    hil = 0
    hy = 0
    mar = 0
    ak = 0
    am = 0
    dl = 0
    jb = 0
    sw = 0
    un = united
    card_list_ak_ihg.append(weighted_avg(ih, ak, weight) * score)
    card_list_am_ihg.append(weighted_avg(ih, am, weight) * score)
    card_list_dl_ihg.append(weighted_avg(ih, dl, weight) * score)
    card_list_jb_ihg.append(weighted_avg(ih, jb, weight) * score)
    card_list_sw_ihg.append(weighted_avg(ih, sw, weight) * score)
    card_list_un_ihg.append(weighted_avg(ih, un, weight) * score)

    card_list_ak_hil.append(weighted_avg(hil, ak, weight) * score)
    card_list_am_hil.append(weighted_avg(hil, am, weight) * score)
    card_list_dl_hil.append(weighted_avg(hil, dl, weight) * score)
    card_list_jb_hil.append(weighted_avg(hil, jb, weight) * score)
    card_list_sw_hil.append(weighted_avg(hil, sw, weight) * score)
    card_list_un_hil.append(weighted_avg(hil, un, weight) * score)

    card_list_ak_hya.append(weighted_avg(hy, ak, weight) * score)
    card_list_am_hya.append(weighted_avg(hy, am, weight) * score)
    card_list_dl_hya.append(weighted_avg(hy, dl, weight) * score)
    card_list_jb_hya.append(weighted_avg(hy, jb, weight) * score)
    card_list_sw_hya.append(weighted_avg(hy, sw, weight) * score)
    card_list_un_hya.append(weighted_avg(hy, un, weight) * score)

    card_list_ak_mar.append(weighted_avg(mar, ak, weight) * score)
    card_list_am_mar.append(weighted_avg(mar, am, weight) * score)
    card_list_dl_mar.append(weighted_avg(mar, dl, weight) * score)
    card_list_jb_mar.append(weighted_avg(mar, jb, weight) * score)
    card_list_sw_mar.append(weighted_avg(mar, sw, weight) * score)
    card_list_un_mar.append(weighted_avg(mar, un, weight) * score)

# IHG
for score in card_list[25:27]:
    ih = ihg
    hil = 0
    hy = 0
    mar = 0
    ak = 0.2 * alaska
    am = 0.2 * american
    dl = 0.2 * delta
    jb = 0.2 * jetblue
    sw = 0
    un = 0.2 * united
    card_list_ak_ihg.append(weighted_avg(ih, ak, weight) * score)
    card_list_am_ihg.append(weighted_avg(ih, am, weight) * score)
    card_list_dl_ihg.append(weighted_avg(ih, dl, weight) * score)
    card_list_jb_ihg.append(weighted_avg(ih, jb, weight) * score)
    card_list_sw_ihg.append(weighted_avg(ih, sw, weight) * score)
    card_list_un_ihg.append(weighted_avg(ih, un, weight) * score)

    card_list_ak_hil.append(weighted_avg(hil, ak, weight) * score)
    card_list_am_hil.append(weighted_avg(hil, am, weight) * score)
    card_list_dl_hil.append(weighted_avg(hil, dl, weight) * score)
    card_list_jb_hil.append(weighted_avg(hil, jb, weight) * score)
    card_list_sw_hil.append(weighted_avg(hil, sw, weight) * score)
    card_list_un_hil.append(weighted_avg(hil, un, weight) * score)

    card_list_ak_hya.append(weighted_avg(hy, ak, weight) * score)
    card_list_am_hya.append(weighted_avg(hy, am, weight) * score)
    card_list_dl_hya.append(weighted_avg(hy, dl, weight) * score)
    card_list_jb_hya.append(weighted_avg(hy, jb, weight) * score)
    card_list_sw_hya.append(weighted_avg(hy, sw, weight) * score)
    card_list_un_hya.append(weighted_avg(hy, un, weight) * score)

    card_list_ak_mar.append(weighted_avg(mar, ak, weight) * score)
    card_list_am_mar.append(weighted_avg(mar, am, weight) * score)
    card_list_dl_mar.append(weighted_avg(mar, dl, weight) * score)
    card_list_jb_mar.append(weighted_avg(mar, jb, weight) * score)
    card_list_sw_mar.append(weighted_avg(mar, sw, weight) * score)
    card_list_un_mar.append(weighted_avg(mar, un, weight) * score)

# Hyatt
for score in card_list[27:28]:
    ih = 0
    hil = 0
    hy = hyatt
    mar = 0
    ak = 0
    am = 0.4 * american
    dl = 0.4 * delta
    jb = 0
    sw = (2.4/5) * southwest
    un = 0.4 * united
    card_list_ak_ihg.append(weighted_avg(ih, ak, weight) * score)
    card_list_am_ihg.append(weighted_avg(ih, am, weight) * score)
    card_list_dl_ihg.append(weighted_avg(ih, dl, weight) * score)
    card_list_jb_ihg.append(weighted_avg(ih, jb, weight) * score)
    card_list_sw_ihg.append(weighted_avg(ih, sw, weight) * score)
    card_list_un_ihg.append(weighted_avg(ih, un, weight) * score)

    card_list_ak_hil.append(weighted_avg(hil, ak, weight) * score)
    card_list_am_hil.append(weighted_avg(hil, am, weight) * score)
    card_list_dl_hil.append(weighted_avg(hil, dl, weight) * score)
    card_list_jb_hil.append(weighted_avg(hil, jb, weight) * score)
    card_list_sw_hil.append(weighted_avg(hil, sw, weight) * score)
    card_list_un_hil.append(weighted_avg(hil, un, weight) * score)

    card_list_ak_hya.append(weighted_avg(hy, ak, weight) * score)
    card_list_am_hya.append(weighted_avg(hy, am, weight) * score)
    card_list_dl_hya.append(weighted_avg(hy, dl, weight) * score)
    card_list_jb_hya.append(weighted_avg(hy, jb, weight) * score)
    card_list_sw_hya.append(weighted_avg(hy, sw, weight) * score)
    card_list_un_hya.append(weighted_avg(hy, un, weight) * score)

    card_list_ak_mar.append(weighted_avg(mar, ak, weight) * score)
    card_list_am_mar.append(weighted_avg(mar, am, weight) * score)
    card_list_dl_mar.append(weighted_avg(mar, dl, weight) * score)
    card_list_jb_mar.append(weighted_avg(mar, jb, weight) * score)
    card_list_sw_mar.append(weighted_avg(mar, sw, weight) * score)
    card_list_un_mar.append(weighted_avg(mar, un, weight) * score)

# Citi
for score in card_list[28:29]:
    ih = 0
    hil = 0
    hy = 0
    mar = 0
    ak = 0
    am = 0
    dl = 0
    jb = jetblue
    sw = 0
    un = 0
    card_list_ak_ihg.append(weighted_avg(ih, ak, weight) * score)
    card_list_am_ihg.append(weighted_avg(ih, am, weight) * score)
    card_list_dl_ihg.append(weighted_avg(ih, dl, weight) * score)
    card_list_jb_ihg.append(weighted_avg(ih, jb, weight) * score)
    card_list_sw_ihg.append(weighted_avg(ih, sw, weight) * score)
    card_list_un_ihg.append(weighted_avg(ih, un, weight) * score)

    card_list_ak_hil.append(weighted_avg(hil, ak, weight) * score)
    card_list_am_hil.append(weighted_avg(hil, am, weight) * score)
    card_list_dl_hil.append(weighted_avg(hil, dl, weight) * score)
    card_list_jb_hil.append(weighted_avg(hil, jb, weight) * score)
    card_list_sw_hil.append(weighted_avg(hil, sw, weight) * score)
    card_list_un_hil.append(weighted_avg(hil, un, weight) * score)

    card_list_ak_hya.append(weighted_avg(hy, ak, weight) * score)
    card_list_am_hya.append(weighted_avg(hy, am, weight) * score)
    card_list_dl_hya.append(weighted_avg(hy, dl, weight) * score)
    card_list_jb_hya.append(weighted_avg(hy, jb, weight) * score)
    card_list_sw_hya.append(weighted_avg(hy, sw, weight) * score)
    card_list_un_hya.append(weighted_avg(hy, un, weight) * score)

    card_list_ak_mar.append(weighted_avg(mar, ak, weight) * score)
    card_list_am_mar.append(weighted_avg(mar, am, weight) * score)
    card_list_dl_mar.append(weighted_avg(mar, dl, weight) * score)
    card_list_jb_mar.append(weighted_avg(mar, jb, weight) * score)
    card_list_sw_mar.append(weighted_avg(mar, sw, weight) * score)
    card_list_un_mar.append(weighted_avg(mar, un, weight) * score)

# American
for score in card_list[29:32]:
    ih = 0
    hil = 0
    hy = 0
    mar = 0
    ak = 0
    am = american
    dl = 0
    jb = 0
    sw = 0
    un = 0
    card_list_ak_ihg.append(weighted_avg(ih, ak, weight) * score)
    card_list_am_ihg.append(weighted_avg(ih, am, weight) * score)
    card_list_dl_ihg.append(weighted_avg(ih, dl, weight) * score)
    card_list_jb_ihg.append(weighted_avg(ih, jb, weight) * score)
    card_list_sw_ihg.append(weighted_avg(ih, sw, weight) * score)
    card_list_un_ihg.append(weighted_avg(ih, un, weight) * score)

    card_list_ak_hil.append(weighted_avg(hil, ak, weight) * score)
    card_list_am_hil.append(weighted_avg(hil, am, weight) * score)
    card_list_dl_hil.append(weighted_avg(hil, dl, weight) * score)
    card_list_jb_hil.append(weighted_avg(hil, jb, weight) * score)
    card_list_sw_hil.append(weighted_avg(hil, sw, weight) * score)
    card_list_un_hil.append(weighted_avg(hil, un, weight) * score)

    card_list_ak_hya.append(weighted_avg(hy, ak, weight) * score)
    card_list_am_hya.append(weighted_avg(hy, am, weight) * score)
    card_list_dl_hya.append(weighted_avg(hy, dl, weight) * score)
    card_list_jb_hya.append(weighted_avg(hy, jb, weight) * score)
    card_list_sw_hya.append(weighted_avg(hy, sw, weight) * score)
    card_list_un_hya.append(weighted_avg(hy, un, weight) * score)

    card_list_ak_mar.append(weighted_avg(mar, ak, weight) * score)
    card_list_am_mar.append(weighted_avg(mar, am, weight) * score)
    card_list_dl_mar.append(weighted_avg(mar, dl, weight) * score)
    card_list_jb_mar.append(weighted_avg(mar, jb, weight) * score)
    card_list_sw_mar.append(weighted_avg(mar, sw, weight) * score)
    card_list_un_mar.append(weighted_avg(mar, un, weight) * score)

for num in card_list_ak_ihg:
    card_list_ak_ihg[card_list_ak_ihg.index(
        num)] += 0.000000000001 * (card_list_ak_ihg.index(num) + 1)
for num in card_list_am_ihg:
    card_list_am_ihg[card_list_am_ihg.index(
        num)] += 0.000000000002 * (card_list_am_ihg.index(num) + 1)
for num in card_list_dl_ihg:
    card_list_dl_ihg[card_list_dl_ihg.index(
        num)] += 0.000000000003 * (card_list_dl_ihg.index(num) + 1)
for num in card_list_jb_ihg:
    card_list_jb_ihg[card_list_jb_ihg.index(
        num)] += 0.000000000004 * (card_list_jb_ihg.index(num) + 1)
for num in card_list_sw_ihg:
    card_list_sw_ihg[card_list_sw_ihg.index(
        num)] += 0.000000000005 * (card_list_sw_ihg.index(num) + 1)
for num in card_list_un_ihg:
    card_list_un_ihg[card_list_un_ihg.index(
        num)] += 0.000000000006 * (card_list_un_ihg.index(num) + 1)
for num in card_list_ak_hil:
    card_list_ak_hil[card_list_ak_hil.index(
        num)] += 0.000000000007 * (card_list_ak_hil.index(num) + 3)
for num in card_list_am_hil:
    card_list_am_hil[card_list_am_hil.index(
        num)] += 0.000000000008 * (card_list_am_hil.index(num) + 6)
for num in card_list_dl_hil:
    card_list_dl_hil[card_list_dl_hil.index(
        num)] += 0.000000000009 * (card_list_dl_hil.index(num) + 9)
for num in card_list_jb_hil:
    card_list_jb_hil[card_list_jb_hil.index(
        num)] += 0.000000000010 * (card_list_jb_hil.index(num) + 12)
for num in card_list_sw_hil:
    card_list_sw_hil[card_list_sw_hil.index(
        num)] += 0.000000000011 * (card_list_sw_hil.index(num) + 15)
for num in card_list_un_hil:
    card_list_un_hil[card_list_un_hil.index(
        num)] += 0.000000000012 * (card_list_un_hil.index(num) + 18)
for num in card_list_ak_hya:
    card_list_ak_hya[card_list_ak_hya.index(
        num)] += 0.000000000013 * (card_list_ak_hya.index(num) + 1)
for num in card_list_am_hya:
    card_list_am_hya[card_list_am_hya.index(
        num)] += 0.000000000014 * (card_list_am_hya.index(num) + 1)
for num in card_list_dl_hya:
    card_list_dl_hya[card_list_dl_hya.index(
        num)] += 0.000000000015 * (card_list_dl_hya.index(num) + 1)
for num in card_list_jb_hya:
    card_list_jb_hya[card_list_jb_hya.index(
        num)] += 0.000000000016 * (card_list_jb_hya.index(num) + 1)
for num in card_list_sw_hya:
    card_list_sw_hya[card_list_sw_hya.index(
        num)] += 0.000000000017 * (card_list_sw_hya.index(num) + 1)
for num in card_list_un_hya:
    card_list_un_hya[card_list_un_hya.index(
        num)] += 0.000000000018 * (card_list_un_hya.index(num) + 1)
for num in card_list_ak_mar:
    card_list_ak_mar[card_list_ak_mar.index(
        num)] += 0.000000000019 * (card_list_ak_mar.index(num) + 1)
for num in card_list_am_mar:
    card_list_am_mar[card_list_am_mar.index(
        num)] += 0.000000000020 * (card_list_am_mar.index(num) + 1)
for num in card_list_dl_mar:
    card_list_dl_mar[card_list_dl_mar.index(
        num)] += 0.000000000021 * (card_list_dl_mar.index(num) + 1)
for num in card_list_jb_mar:
    card_list_jb_mar[card_list_jb_mar.index(
        num)] += 0.000000000022 * (card_list_jb_mar.index(num) + 1)
for num in card_list_sw_mar:
    card_list_sw_mar[card_list_sw_mar.index(
        num)] += 0.000000000023 * (card_list_sw_mar.index(num) + 1)
for num in card_list_un_mar:
    card_list_un_mar[card_list_un_mar.index(
        num)] += 0.000000000024 * (card_list_un_mar.index(num) + 1)

credit_cards = {
    card_list_ak_ihg[
        0]: "American Express Platinum Card\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        0]: "American Express Platinum Card\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[
        0]: "American Express Platinum Card\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        0]: "American Express Platinum Card\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[
        0]: "American Express Platinum Card\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        0]: "American Express Platinum Card\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        0]: "American Express Platinum Card\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        0]: "American Express Platinum Card\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        0]: "American Express Platinum Card\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        0]: "American Express Platinum Card\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        0]: "American Express Platinum Card\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        0]: "American Express Platinum Card\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        0]: "American Express Platinum Card\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        0]: "American Express Platinum Card\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        0]: "American Express Platinum Card\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        0]: "American Express Platinum Card\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        0]: "American Express Platinum Card\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        0]: "American Express Platinum Card\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        0]: "American Express Platinum Card\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        0]: "American Express Platinum Card\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[
        0]: "American Express Platinum Card\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        0]: "American Express Platinum Card\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        0]: "American Express Platinum Card\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        0]: "American Express Platinum Card\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program",

    card_list_ak_ihg[
        1]: "American Express Gold Card\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        1]: "American Express Gold Card\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[
        1]: "American Express Gold Card\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        1]: "American Express Gold Card\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[
        1]: "American Express Gold Card\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        1]: "American Express Gold Card\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        1]: "American Express Gold Card\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        1]: "American Express Gold Card\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        1]: "American Express Gold Card\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        1]: "American Express Gold Card\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        1]: "American Express Gold Card\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        1]: "American Express Gold Card\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        1]: "American Express Gold Card\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        1]: "American Express Gold Card\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        1]: "American Express Gold Card\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        1]: "American Express Gold Card\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        1]: "American Express Gold Card\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        1]: "American Express Gold Card\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        1]: "American Express Gold Card\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        1]: "American Express Gold Card\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[
        1]: "American Express Gold Card\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        1]: "American Express Gold Card\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        1]: "American Express Gold Card\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        1]: "American Express Gold Card\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program",

    card_list_ak_ihg[
        2]: "American Express Green Card\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        2]: "American Express Green Card\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[2]: "American Express Green Card\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        2]: "American Express Green Card\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[
        2]: "American Express Green Card\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        2]: "American Express Green Card\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        2]: "American Express Green Card\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        2]: "American Express Green Card\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        2]: "American Express Green Card\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        2]: "American Express Green Card\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        2]: "American Express Green Card\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        2]: "American Express Green Card\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        2]: "American Express Green Card\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        2]: "American Express Green Card\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        2]: "American Express Green Card\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        2]: "American Express Green Card\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        2]: "American Express Green Card\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        2]: "American Express Green Card\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        2]: "American Express Green Card\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        2]: "American Express Green Card\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[
        2]: "American Express Green Card\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        2]: "American Express Green Card\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        2]: "American Express Green Card\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        2]: "American Express Green Card\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program",

    card_list_ak_ihg[
        3]: "American Express EveryDay Card\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        3]: "American Express EveryDay Card\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[
        3]: "American Express EveryDay Card\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        3]: "American Express EveryDay Card\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[
        3]: "American Express EveryDay Card\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        3]: "American Express EveryDay Card\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        3]: "American Express EveryDay Card\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        3]: "American Express EveryDay Card\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        3]: "American Express EveryDay Card\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        3]: "American Express EveryDay Card\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        3]: "American Express EveryDay Card\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        3]: "American Express EveryDay Card\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        3]: "American Express EveryDay Card\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        3]: "American Express EveryDay Card\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        3]: "American Express EveryDay Card\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        3]: "American Express EveryDay Card\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        3]: "American Express EveryDay Card\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        3]: "American Express EveryDay Card\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        3]: "American Express EveryDay Card\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        3]: "American Express EveryDay Card\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[
        3]: "American Express EveryDay Card\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        3]: "American Express EveryDay Card\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        3]: "American Express EveryDay Card\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        3]: "American Express EveryDay Card\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program",

    card_list_ak_ihg[
        4]: "American Express EveryDay Preferred Card\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        4]: "American Express EveryDay Preferred Card\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[
        4]: "American Express EveryDay Preferred Card\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        4]: "American Express EveryDay Preferred Card\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[
        4]: "American Express EveryDay Preferred Card\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        4]: "American Express EveryDay Preferred Card\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        4]: "American Express EveryDay Preferred Card\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        4]: "American Express EveryDay Preferred Card\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        4]: "American Express EveryDay Preferred Card\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        4]: "American Express EveryDay Preferred Card\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        4]: "American Express EveryDay Preferred Card\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        4]: "American Express EveryDay Preferred Card\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        4]: "American Express EveryDay Preferred Card\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        4]: "American Express EveryDay Preferred Card\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        4]: "American Express EveryDay Preferred Card\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        4]: "American Express EveryDay Preferred Card\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        4]: "American Express EveryDay Preferred Card\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        4]: "American Express EveryDay Preferred Card\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        4]: "American Express EveryDay Preferred Card\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        4]: "American Express EveryDay Preferred Card\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[
        4]: "American Express EveryDay Preferred Card\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        4]: "American Express EveryDay Preferred Card\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        4]: "American Express EveryDay Preferred Card\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        4]: "American Express EveryDay Preferred Card\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program",

    card_list_ak_ihg[
        5]: "American Express Blue Card\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        5]: "American Express Blue Card\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[5]: "American Express Blue Card\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        5]: "American Express Blue Card\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[
        5]: "American Express Blue Card\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        5]: "American Express Blue Card\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        5]: "American Express Blue Card\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        5]: "American Express Blue Card\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        5]: "American Express Blue Card\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        5]: "American Express Blue Card\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        5]: "American Express Blue Card\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        5]: "American Express Blue Card\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        5]: "American Express Blue Card\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        5]: "American Express Blue Card\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        5]: "American Express Blue Card\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        5]: "American Express Blue Card\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        5]: "American Express Blue Card\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        5]: "American Express Blue Card\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        5]: "American Express Blue Card\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        5]: "American Express Blue Card\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[
        5]: "American Express Blue Card\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        5]: "American Express Blue Card\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        5]: "American Express Blue Card\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        5]: "American Express Blue Card\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program",

    card_list_ak_ihg[
        6]: "Delta SkyMiles Blue Card\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        6]: "Delta SkyMiles Blue Card\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[6]: "Delta SkyMiles Blue Card\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        6]: "Delta SkyMiles Blue Card\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[
        6]: "Delta SkyMiles Blue Card\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        6]: "Delta SkyMiles Blue Card\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        6]: "Delta SkyMiles Blue Card\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        6]: "Delta SkyMiles Blue Card\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        6]: "Delta SkyMiles Blue Card\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        6]: "Delta SkyMiles Blue Card\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        6]: "Delta SkyMiles Blue Card\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        6]: "Delta SkyMiles Blue Card\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        6]: "Delta SkyMiles Blue Card\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        6]: "Delta SkyMiles Blue Card\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        6]: "Delta SkyMiles Blue Card\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        6]: "Delta SkyMiles Blue Card\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        6]: "Delta SkyMiles Blue Card\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        6]: "Delta SkyMiles Blue Card\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        6]: "Delta SkyMiles Blue Card\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        6]: "Delta SkyMiles Blue Card\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[
        6]: "Delta SkyMiles Blue Card\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        6]: "Delta SkyMiles Blue Card\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        6]: "Delta SkyMiles Blue Card\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        6]: "Delta SkyMiles Blue Card\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program",

    card_list_ak_ihg[
        7]: "Delta SkyMiles Gold Card\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        7]: "Delta SkyMiles Gold Card\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[7]: "Delta SkyMiles Gold Card\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        7]: "Delta SkyMiles Gold Card\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[
        7]: "Delta SkyMiles Gold Card\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        7]: "Delta SkyMiles Gold Card\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        7]: "Delta SkyMiles Gold Card\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        7]: "Delta SkyMiles Gold Card\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        7]: "Delta SkyMiles Gold Card\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        7]: "Delta SkyMiles Gold Card\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        7]: "Delta SkyMiles Gold Card\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        7]: "Delta SkyMiles Gold Card\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        7]: "Delta SkyMiles Gold Card\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        7]: "Delta SkyMiles Gold Card\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        7]: "Delta SkyMiles Gold Card\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        7]: "Delta SkyMiles Gold Card\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        7]: "Delta SkyMiles Gold Card\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        7]: "Delta SkyMiles Gold Card\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        7]: "Delta SkyMiles Gold Card\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        7]: "Delta SkyMiles Gold Card\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[
        7]: "Delta SkyMiles Gold Card\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        7]: "Delta SkyMiles Gold Card\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        7]: "Delta SkyMiles Gold Card\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        7]: "Delta SkyMiles Gold Card\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program",

    card_list_ak_ihg[
        8]: "Delta SkyMiles Platinum Card\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        8]: "Delta SkyMiles Platinum Card\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[8]: "Delta SkyMiles Platinum Card\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        8]: "Delta SkyMiles Platinum Card\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[
        8]: "Delta SkyMiles Platinum Card\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        8]: "Delta SkyMiles Platinum Card\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        8]: "Delta SkyMiles Platinum Card\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        8]: "Delta SkyMiles Platinum Card\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        8]: "Delta SkyMiles Platinum Card\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        8]: "Delta SkyMiles Platinum Card\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        8]: "Delta SkyMiles Platinum Card\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        8]: "Delta SkyMiles Platinum Card\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        8]: "Delta SkyMiles Platinum Card\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        8]: "Delta SkyMiles Platinum Card\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        8]: "Delta SkyMiles Platinum Card\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        8]: "Delta SkyMiles Platinum Card\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        8]: "Delta SkyMiles Platinum Card\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        8]: "Delta SkyMiles Platinum Card\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        8]: "Delta SkyMiles Platinum Card\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        8]: "Delta SkyMiles Platinum Card\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[
        8]: "Delta SkyMiles Platinum Card\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        8]: "Delta SkyMiles Platinum Card\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        8]: "Delta SkyMiles Platinum Card\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        8]: "Delta SkyMiles Platinum Card\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program",

    card_list_ak_ihg[
        9]: "Delta SkyMiles Reserve Card\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        9]: "Delta SkyMiles Reserve Card\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[9]: "Delta SkyMiles Reserve Card\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        9]: "Delta SkyMiles Reserve Card\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[
        9]: "Delta SkyMiles Reserve Card\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        9]: "Delta SkyMiles Reserve Card\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        9]: "Delta SkyMiles Reserve Card\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        9]: "Delta SkyMiles Reserve Card\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        9]: "Delta SkyMiles Reserve Card\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        9]: "Delta SkyMiles Reserve Card\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        9]: "Delta SkyMiles Reserve Card\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        9]: "Delta SkyMiles Reserve Card\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        9]: "Delta SkyMiles Reserve Card\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        9]: "Delta SkyMiles Reserve Card\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        9]: "Delta SkyMiles Reserve Card\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        9]: "Delta SkyMiles Reserve Card\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        9]: "Delta SkyMiles Reserve Card\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        9]: "Delta SkyMiles Reserve Card\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        9]: "Delta SkyMiles Reserve Card\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        9]: "Delta SkyMiles Reserve Card\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[
        9]: "Delta SkyMiles Reserve Card\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        9]: "Delta SkyMiles Reserve Card\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        9]: "Delta SkyMiles Reserve Card\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        9]: "Delta SkyMiles Reserve Card\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program",

    card_list_ak_ihg[
        10]: "Hilton Honors Card\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        10]: "Hilton Honors Card\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[10]: "Hilton Honors Card\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        10]: "Hilton Honors Card\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[10]: "Hilton Honors Card\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        10]: "Hilton Honors Card\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        10]: "Hilton Honors Card\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        10]: "Hilton Honors Card\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        10]: "Hilton Honors Card\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        10]: "Hilton Honors Card\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        10]: "Hilton Honors Card\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        10]: "Hilton Honors Card\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        10]: "Hilton Honors Card\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        10]: "Hilton Honors Card\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        10]: "Hilton Honors Card\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        10]: "Hilton Honors Card\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        10]: "Hilton Honors Card\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        10]: "Hilton Honors Card\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        10]: "Hilton Honors Card\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        10]: "Hilton Honors Card\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[10]: "Hilton Honors Card\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        10]: "Hilton Honors Card\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        10]: "Hilton Honors Card\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        10]: "Hilton Honors Card\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program",

    card_list_ak_ihg[
        11]: "Hilton Honors Surpass Card\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        11]: "Hilton Honors Surpass Card\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[11]: "Hilton Honors Surpass Card\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        11]: "Hilton Honors Surpass Card\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[
        11]: "Hilton Honors Surpass Card\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        11]: "Hilton Honors Surpass Card\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        11]: "Hilton Honors Surpass Card\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        11]: "Hilton Honors Surpass Card\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        11]: "Hilton Honors Surpass Card\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        11]: "Hilton Honors Surpass Card\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        11]: "Hilton Honors Surpass Card\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        11]: "Hilton Honors Surpass Card\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        11]: "Hilton Honors Surpass Card\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        11]: "Hilton Honors Surpass Card\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        11]: "Hilton Honors Surpass Card\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        11]: "Hilton Honors Surpass Card\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        11]: "Hilton Honors Surpass Card\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        11]: "Hilton Honors Surpass Card\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        11]: "Hilton Honors Surpass Card\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        11]: "Hilton Honors Surpass Card\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[
        11]: "Hilton Honors Surpass Card\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        11]: "Hilton Honors Surpass Card\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        11]: "Hilton Honors Surpass Card\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        11]: "Hilton Honors Surpass Card\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program",

    card_list_ak_ihg[
        12]: "Hilton Honors Aspire Card\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        12]: "Hilton Honors Aspire Card\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[12]: "Hilton Honors Aspire Card\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        12]: "Hilton Honors Aspire Card\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[
        12]: "Hilton Honors Aspire Card\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        12]: "Hilton Honors Aspire Card\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        12]: "Hilton Honors Aspire Card\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        12]: "Hilton Honors Aspire Card\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        12]: "Hilton Honors Aspire Card\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        12]: "Hilton Honors Aspire Card\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        12]: "Hilton Honors Aspire Card\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        12]: "Hilton Honors Aspire Card\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        12]: "Hilton Honors Aspire Card\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        12]: "Hilton Honors Aspire Card\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        12]: "Hilton Honors Aspire Card\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        12]: "Hilton Honors Aspire Card\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        12]: "Hilton Honors Aspire Card\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        12]: "Hilton Honors Aspire Card\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        12]: "Hilton Honors Aspire Card\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        12]: "Hilton Honors Aspire Card\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[
        12]: "Hilton Honors Aspire Card\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        12]: "Hilton Honors Aspire Card\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        12]: "Hilton Honors Aspire Card\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        12]: "Hilton Honors Aspire Card\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program",

    card_list_ak_ihg[
        13]: "Marriott Bonvoy Bold Card\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        13]: "Marriott Bonvoy Bold Card\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[13]: "Marriott Bonvoy Bold Card\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        13]: "Marriott Bonvoy Bold Card\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[
        13]: "Marriott Bonvoy Bold Card\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        13]: "Marriott Bonvoy Bold Card\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        13]: "Marriott Bonvoy Bold Card\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        13]: "Marriott Bonvoy Bold Card\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        13]: "Marriott Bonvoy Bold Card\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        13]: "Marriott Bonvoy Bold Card\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        13]: "Marriott Bonvoy Bold Card\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        13]: "Marriott Bonvoy Bold Card\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        13]: "Marriott Bonvoy Bold Card\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        13]: "Marriott Bonvoy Bold Card\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        13]: "Marriott Bonvoy Bold Card\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        13]: "Marriott Bonvoy Bold Card\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        13]: "Marriott Bonvoy Bold Card\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        13]: "Marriott Bonvoy Bold Card\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        13]: "Marriott Bonvoy Bold Card\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        13]: "Marriott Bonvoy Bold Card\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[
        13]: "Marriott Bonvoy Bold Card\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        13]: "Marriott Bonvoy Bold Card\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        13]: "Marriott Bonvoy Bold Card\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        13]: "Marriott Bonvoy Bold Card\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program",

    card_list_ak_ihg[
        14]: "Marriott Bonvoy Boundless Card\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        14]: "Marriott Bonvoy Boundless Card\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[
        14]: "Marriott Bonvoy Boundless Card\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        14]: "Marriott Bonvoy Boundless Card\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[
        14]: "Marriott Bonvoy Boundless Card\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        14]: "Marriott Bonvoy Boundless Card\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        14]: "Marriott Bonvoy Boundless Card\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        14]: "Marriott Bonvoy Boundless Card\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        14]: "Marriott Bonvoy Boundless Card\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        14]: "Marriott Bonvoy Boundless Card\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        14]: "Marriott Bonvoy Boundless Card\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        14]: "Marriott Bonvoy Boundless Card\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        14]: "Marriott Bonvoy Boundless Card\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        14]: "Marriott Bonvoy Boundless Card\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        14]: "Marriott Bonvoy Boundless Card\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        14]: "Marriott Bonvoy Boundless Card\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        14]: "Marriott Bonvoy Boundless Card\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        14]: "Marriott Bonvoy Boundless Card\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        14]: "Marriott Bonvoy Boundless Card\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        14]: "Marriott Bonvoy Boundless Card\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[
        14]: "Marriott Bonvoy Boundless Card\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        14]: "Marriott Bonvoy Boundless Card\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        14]: "Marriott Bonvoy Boundless Card\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        14]: "Marriott Bonvoy Boundless Card\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program",

    card_list_ak_ihg[
        15]: "Marriott Bonvoy Brilliant Card\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        15]: "Marriott Bonvoy Brilliant Card\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[
        15]: "Marriott Bonvoy Brilliant Card\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        15]: "Marriott Bonvoy Brilliant Card\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[
        15]: "Marriott Bonvoy Brilliant Card\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        15]: "Marriott Bonvoy Brilliant Card\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        15]: "Marriott Bonvoy Brilliant Card\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        15]: "Marriott Bonvoy Brilliant Card\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        15]: "Marriott Bonvoy Brilliant Card\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        15]: "Marriott Bonvoy Brilliant Card\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        15]: "Marriott Bonvoy Brilliant Card\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        15]: "Marriott Bonvoy Brilliant Card\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        15]: "Marriott Bonvoy Brilliant Card\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        15]: "Marriott Bonvoy Brilliant Card\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        15]: "Marriott Bonvoy Brilliant Card\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        15]: "Marriott Bonvoy Brilliant Card\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        15]: "Marriott Bonvoy Brilliant Card\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        15]: "Marriott Bonvoy Brilliant Card\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        15]: "Marriott Bonvoy Brilliant Card\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        15]: "Marriott Bonvoy Brilliant Card\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[
        15]: "Marriott Bonvoy Brilliant Card\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        15]: "Marriott Bonvoy Brilliant Card\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        15]: "Marriott Bonvoy Brilliant Card\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        15]: "Marriott Bonvoy Brilliant Card\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program",

    card_list_ak_ihg[
        16]: "Chase Sapphire Preferred Card\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        16]: "Chase Sapphire Preferred Card\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[
        16]: "Chase Sapphire Preferred Card\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        16]: "Chase Sapphire Preferred Card\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[
        16]: "Chase Sapphire Preferred Card\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        16]: "Chase Sapphire Preferred Card\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        16]: "Chase Sapphire Preferred Card\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        16]: "Chase Sapphire Preferred Card\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        16]: "Chase Sapphire Preferred Card\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        16]: "Chase Sapphire Preferred Card\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        16]: "Chase Sapphire Preferred Card\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        16]: "Chase Sapphire Preferred Card\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        16]: "Chase Sapphire Preferred Card\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        16]: "Chase Sapphire Preferred Card\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        16]: "Chase Sapphire Preferred Card\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        16]: "Chase Sapphire Preferred Card\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        16]: "Chase Sapphire Preferred Card\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        16]: "Chase Sapphire Preferred Card\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        16]: "Chase Sapphire Preferred Card\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        16]: "Chase Sapphire Preferred Card\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[
        16]: "Chase Sapphire Preferred Card\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        16]: "Chase Sapphire Preferred Card\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        16]: "Chase Sapphire Preferred Card\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        16]: "Chase Sapphire Preferred Card\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program",

    card_list_ak_ihg[
        17]: "Chase Sapphire Reserve Card\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        17]: "Chase Sapphire Reserve Card\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[
        17]: "Chase Sapphire Reserve Card\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        17]: "Chase Sapphire Reserve Card\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[
        17]: "Chase Sapphire Reserve Card\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        17]: "Chase Sapphire Reserve Card\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        17]: "Chase Sapphire Reserve Card\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        17]: "Chase Sapphire Reserve Card\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        17]: "Chase Sapphire Reserve Card\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        17]: "Chase Sapphire Reserve Card\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        17]: "Chase Sapphire Reserve Card\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        17]: "Chase Sapphire Reserve Card\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        17]: "Chase Sapphire Reserve Card\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        17]: "Chase Sapphire Reserve Card\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        17]: "Chase Sapphire Reserve Card\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        17]: "Chase Sapphire Reserve Card\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        17]: "Chase Sapphire Reserve Card\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        17]: "Chase Sapphire Reserve Card\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        17]: "Chase Sapphire Reserve Card\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        17]: "Chase Sapphire Reserve Card\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[
        17]: "Chase Sapphire Reserve Card\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        17]: "Chase Sapphire Reserve Card\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        17]: "Chase Sapphire Reserve Card\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        17]: "Chase Sapphire Reserve Card\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program",

    card_list_ak_ihg[
        18]: "Southwest Rapid Rewards Plus Card\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        18]: "Southwest Rapid Rewards Plus Card\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[
        18]: "Southwest Rapid Rewards Plus Card\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        18]: "Southwest Rapid Rewards Plus Card\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[
        18]: "Southwest Rapid Rewards Plus Card\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        18]: "Southwest Rapid Rewards Plus Card\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        18]: "Southwest Rapid Rewards Plus Card\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        18]: "Southwest Rapid Rewards Plus Card\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        18]: "Southwest Rapid Rewards Plus Card\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        18]: "Southwest Rapid Rewards Plus Card\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        18]: "Southwest Rapid Rewards Plus Card\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        18]: "Southwest Rapid Rewards Plus Card\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        18]: "Southwest Rapid Rewards Plus Card\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        18]: "Southwest Rapid Rewards Plus Card\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        18]: "Southwest Rapid Rewards Plus Card\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        18]: "Southwest Rapid Rewards Plus Card\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        18]: "Southwest Rapid Rewards Plus Card\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        18]: "Southwest Rapid Rewards Plus Card\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        18]: "Southwest Rapid Rewards Plus Card\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        18]: "Southwest Rapid Rewards Plus Card\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[
        18]: "Southwest Rapid Rewards Plus Card\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        18]: "Southwest Rapid Rewards Plus Card\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        18]: "Southwest Rapid Rewards Plus Card\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        18]: "Southwest Rapid Rewards Plus Card\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program",

    card_list_ak_ihg[
        19]: "Southwest Rapid Rewards Priority Card\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        19]: "Southwest Rapid Rewards Priority Card\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[
        19]: "Southwest Rapid Rewards Priority Card\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        19]: "Southwest Rapid Rewards Priority Card\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[
        19]: "Southwest Rapid Rewards Priority Card\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        19]: "Southwest Rapid Rewards Priority Card\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        19]: "Southwest Rapid Rewards Priority Card\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        19]: "Southwest Rapid Rewards Priority Card\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        19]: "Southwest Rapid Rewards Priority Card\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        19]: "Southwest Rapid Rewards Priority Card\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        19]: "Southwest Rapid Rewards Priority Card\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        19]: "Southwest Rapid Rewards Priority Card\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        19]: "Southwest Rapid Rewards Priority Card\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        19]: "Southwest Rapid Rewards Priority Card\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        19]: "Southwest Rapid Rewards Priority Card\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        19]: "Southwest Rapid Rewards Priority Card\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        19]: "Southwest Rapid Rewards Priority Card\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        19]: "Southwest Rapid Rewards Priority Card\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        19]: "Southwest Rapid Rewards Priority Card\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        19]: "Southwest Rapid Rewards Priority Card\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[
        19]: "Southwest Rapid Rewards Priority Card\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        19]: "Southwest Rapid Rewards Priority Card\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        19]: "Southwest Rapid Rewards Priority Card\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        19]: "Southwest Rapid Rewards Priority Card\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program",

    card_list_ak_ihg[
        20]: "Southwest Rapid Rewards Premier Card\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        20]: "Southwest Rapid Rewards Premier Card\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[
        20]: "Southwest Rapid Rewards Premier Card\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        20]: "Southwest Rapid Rewards Premier Card\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[
        20]: "Southwest Rapid Rewards Premier Card\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        20]: "Southwest Rapid Rewards Premier Card\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        20]: "Southwest Rapid Rewards Premier Card\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        20]: "Southwest Rapid Rewards Premier Card\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        20]: "Southwest Rapid Rewards Premier Card\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        20]: "Southwest Rapid Rewards Premier Card\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        20]: "Southwest Rapid Rewards Premier Card\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        20]: "Southwest Rapid Rewards Premier Card\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        20]: "Southwest Rapid Rewards Premier Card\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        20]: "Southwest Rapid Rewards Premier Card\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        20]: "Southwest Rapid Rewards Premier Card\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        20]: "Southwest Rapid Rewards Premier Card\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        20]: "Southwest Rapid Rewards Premier Card\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        20]: "Southwest Rapid Rewards Premier Card\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        20]: "Southwest Rapid Rewards Premier Card\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        20]: "Southwest Rapid Rewards Premier Card\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[
        20]: "Southwest Rapid Rewards Premier Card\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        20]: "Southwest Rapid Rewards Premier Card\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        20]: "Southwest Rapid Rewards Premier Card\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        20]: "Southwest Rapid Rewards Premier Card\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program",

    card_list_ak_ihg[
        21]: "United MileagePlus Gateway Card\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        21]: "United MileagePlus Gateway Card\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[
        21]: "United MileagePlus Gateway Card\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        21]: "United MileagePlus Gateway Card\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[
        21]: "United MileagePlus Gateway Card\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        21]: "United MileagePlus Gateway Card\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        21]: "United MileagePlus Gateway Card\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        21]: "United MileagePlus Gateway Card\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        21]: "United MileagePlus Gateway Card\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        21]: "United MileagePlus Gateway Card\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        21]: "United MileagePlus Gateway Card\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        21]: "United MileagePlus Gateway Card\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        21]: "United MileagePlus Gateway Card\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        21]: "United MileagePlus Gateway Card\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        21]: "United MileagePlus Gateway Card\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        21]: "United MileagePlus Gateway Card\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        21]: "United MileagePlus Gateway Card\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        21]: "United MileagePlus Gateway Card\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        21]: "United MileagePlus Gateway Card\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        21]: "United MileagePlus Gateway Card\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[
        21]: "United MileagePlus Gateway Card\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        21]: "United MileagePlus Gateway Card\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        21]: "United MileagePlus Gateway Card\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        21]: "United MileagePlus Gateway Card\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program",

    card_list_ak_ihg[
        22]: "United MileagePlus Explorer Card\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        22]: "United MileagePlus Explorer Card\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[
        22]: "United MileagePlus Explorer Card\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        22]: "United MileagePlus Explorer Card\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[
        22]: "United MileagePlus Explorer Card\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        22]: "United MileagePlus Explorer Card\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        22]: "United MileagePlus Explorer Card\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        22]: "United MileagePlus Explorer Card\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        22]: "United MileagePlus Explorer Card\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        22]: "United MileagePlus Explorer Card\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        22]: "United MileagePlus Explorer Card\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        22]: "United MileagePlus Explorer Card\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        22]: "United MileagePlus Explorer Card\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        22]: "United MileagePlus Explorer Card\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        22]: "United MileagePlus Explorer Card\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        22]: "United MileagePlus Explorer Card\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        22]: "United MileagePlus Explorer Card\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        22]: "United MileagePlus Explorer Card\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        22]: "United MileagePlus Explorer Card\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        22]: "United MileagePlus Explorer Card\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[
        22]: "United MileagePlus Explorer Card\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        22]: "United MileagePlus Explorer Card\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        22]: "United MileagePlus Explorer Card\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        22]: "United MileagePlus Explorer Card\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program",

    card_list_ak_ihg[
        23]: "United MileagePlus Quest Card\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        23]: "United MileagePlus Quest Card\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[
        23]: "United MileagePlus Quest Card\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        23]: "United MileagePlus Quest Card\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[
        23]: "United MileagePlus Quest Card\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        23]: "United MileagePlus Quest Card\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        23]: "United MileagePlus Quest Card\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        23]: "United MileagePlus Quest Card\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        23]: "United MileagePlus Quest Card\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        23]: "United MileagePlus Quest Card\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        23]: "United MileagePlus Quest Card\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        23]: "United MileagePlus Quest Card\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        23]: "United MileagePlus Quest Card\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        23]: "United MileagePlus Quest Card\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        23]: "United MileagePlus Quest Card\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        23]: "United MileagePlus Quest Card\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        23]: "United MileagePlus Quest Card\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        23]: "United MileagePlus Quest Card\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        23]: "United MileagePlus Quest Card\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        23]: "United MileagePlus Quest Card\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[
        23]: "United MileagePlus Quest Card\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        23]: "United MileagePlus Quest Card\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        23]: "United MileagePlus Quest Card\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        23]: "United MileagePlus Quest Card\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program",

    card_list_ak_ihg[
        24]: "United MileagePlus Club Infinite Card\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        24]: "United MileagePlus Club Infinite Card\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[
        24]: "United MileagePlus Club Infinite Card\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        24]: "United MileagePlus Club Infinite Card\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[
        24]: "United MileagePlus Club Infinite Card\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        24]: "United MileagePlus Club Infinite Card\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        24]: "United MileagePlus Club Infinite Card\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        24]: "United MileagePlus Club Infinite Card\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        24]: "United MileagePlus Club Infinite Card\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        24]: "United MileagePlus Club Infinite Card\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        24]: "United MileagePlus Club Infinite Card\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        24]: "United MileagePlus Club Infinite Card\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        24]: "United MileagePlus Club Infinite Card\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        24]: "United MileagePlus Club Infinite Card\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        24]: "United MileagePlus Club Infinite Card\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        24]: "United MileagePlus Club Infinite Card\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        24]: "United MileagePlus Club Infinite Card\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        24]: "United MileagePlus Club Infinite Card\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        24]: "United MileagePlus Club Infinite Card\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        24]: "United MileagePlus Club Infinite Card\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[
        24]: "United MileagePlus Club Infinite Card\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        24]: "United MileagePlus Club Infinite Card\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        24]: "United MileagePlus Club Infinite Card\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        24]: "United MileagePlus Club Infinite Card\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program",

    card_list_ak_ihg[
        25]: "IHG Traveler Card\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        25]: "IHG Traveler Card\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[
        25]: "IHG Traveler Card\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        25]: "IHG Traveler Card\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[
        25]: "IHG Traveler Card\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        25]: "IHG Traveler Card\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        25]: "IHG Traveler Card\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        25]: "IHG Traveler Card\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        25]: "IHG Traveler Card\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        25]: "IHG Traveler Card\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        25]: "IHG Traveler Card\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        25]: "IHG Traveler Card\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        25]: "IHG Traveler Card\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        25]: "IHG Traveler Card\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        25]: "IHG Traveler Card\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        25]: "IHG Traveler Card\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        25]: "IHG Traveler Card\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        25]: "IHG Traveler Card\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        25]: "IHG Traveler Card\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        25]: "IHG Traveler Card\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[
        25]: "IHG Traveler Card\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        25]: "IHG Traveler Card\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        25]: "IHG Traveler Card\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        25]: "IHG Traveler Card\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program",

    card_list_ak_ihg[
        26]: "IHG Premier Card\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        26]: "IHG Premier Card\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[
        26]: "IHG Premier Card\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        26]: "IHG Premier Card\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[
        26]: "IHG Premier Card\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        26]: "IHG Premier Card\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        26]: "IHG Premier Card\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        26]: "IHG Premier Card\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        26]: "IHG Premier Card\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        26]: "IHG Premier Card\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        26]: "IHG Premier Card\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        26]: "IHG Premier Card\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        26]: "IHG Premier Card\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        26]: "IHG Premier Card\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        26]: "IHG Premier Card\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        26]: "IHG Premier Card\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        26]: "IHG Premier Card\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        26]: "IHG Premier Card\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        26]: "IHG Premier Card\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        26]: "IHG Premier Card\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[
        26]: "IHG Premier Card\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        26]: "IHG Premier Card\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        26]: "IHG Premier Card\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        26]: "IHG Premier Card\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program",

    card_list_ak_ihg[
        27]: "World of Hyatt Credit Card\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        27]: "World of Hyatt Credit Card\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[
        27]: "World of Hyatt Credit Card\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        27]: "World of Hyatt Credit Card\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[
        27]: "World of Hyatt Credit Card\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        27]: "World of Hyatt Credit Card\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        27]: "World of Hyatt Credit Card\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        27]: "World of Hyatt Credit Card\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        27]: "World of Hyatt Credit Card\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        27]: "World of Hyatt Credit Card\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        27]: "World of Hyatt Credit Card\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        27]: "World of Hyatt Credit Card\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        27]: "World of Hyatt Credit Card\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        27]: "World of Hyatt Credit Card\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        27]: "World of Hyatt Credit Card\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        27]: "World of Hyatt Credit Card\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        27]: "World of Hyatt Credit Card\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        27]: "World of Hyatt Credit Card\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        27]: "World of Hyatt Credit Card\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        27]: "World of Hyatt Credit Card\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[
        27]: "World of Hyatt Credit Card\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        27]: "World of Hyatt Credit Card\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        27]: "World of Hyatt Credit Card\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        27]: "World of Hyatt Credit Card\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program",

    card_list_ak_ihg[
        28]: "Citi Premier Card\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        28]: "Citi Premier Card\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[
        28]: "Citi Premier Card\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        28]: "Citi Premier Card\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[
        28]: "Citi Premier Card\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        28]: "Citi Premier Card\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        28]: "Citi Premier Card\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        28]: "Citi Premier Card\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        28]: "Citi Premier Card\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        28]: "Citi Premier Card\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        28]: "Citi Premier Card\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        28]: "Citi Premier Card\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        28]: "Citi Premier Card\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        28]: "Citi Premier Card\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        28]: "Citi Premier Card\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        28]: "Citi Premier Card\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        28]: "Citi Premier Card\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        28]: "Citi Premier Card\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        28]: "Citi Premier Card\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        28]: "Citi Premier Card\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[
        28]: "Citi Premier Card\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        28]: "Citi Premier Card\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        28]: "Citi Premier Card\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        28]: "Citi Premier Card\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program",

    card_list_ak_ihg[
        29]: "American AAdvantage MileUp Mastercard\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        29]: "American AAdvantage MileUp Mastercard\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[
        29]: "American AAdvantage MileUp Mastercard\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        29]: "American AAdvantage MileUp Mastercard\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[
        29]: "American AAdvantage MileUp Mastercard\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        29]: "American AAdvantage MileUp Mastercard\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        29]: "American AAdvantage MileUp Mastercard\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        29]: "American AAdvantage MileUp Mastercard\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        29]: "American AAdvantage MileUp Mastercard\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        29]: "American AAdvantage MileUp Mastercard\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        29]: "American AAdvantage MileUp Mastercard\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        29]: "American AAdvantage MileUp Mastercard\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        29]: "American AAdvantage MileUp Mastercard\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        29]: "American AAdvantage MileUp Mastercard\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        29]: "American AAdvantage MileUp Mastercard\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        29]: "American AAdvantage MileUp Mastercard\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        29]: "American AAdvantage MileUp Mastercard\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        29]: "American AAdvantage MileUp Mastercard\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        29]: "American AAdvantage MileUp Mastercard\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        29]: "American AAdvantage MileUp Mastercard\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[
        29]: "American AAdvantage MileUp Mastercard\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        29]: "American AAdvantage MileUp Mastercard\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        29]: "American AAdvantage MileUp Mastercard\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        29]: "American AAdvantage MileUp Mastercard\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program",

    card_list_ak_ihg[
        30]: "Citi AAdvantage Platinum Select World Elite Mastercard\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        30]: "Citi AAdvantage Platinum Select World Elite Mastercard\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[
        30]: "Citi AAdvantage Platinum Select World Elite Mastercard\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        30]: "Citi AAdvantage Platinum Select World Elite Mastercard\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[
        30]: "Citi AAdvantage Platinum Select World Elite Mastercard\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        30]: "Citi AAdvantage Platinum Select World Elite Mastercard\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        30]: "Citi AAdvantage Platinum Select World Elite Mastercard\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        30]: "Citi AAdvantage Platinum Select World Elite Mastercard\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        30]: "Citi AAdvantage Platinum Select World Elite Mastercard\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        30]: "Citi AAdvantage Platinum Select World Elite Mastercard\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        30]: "Citi AAdvantage Platinum Select World Elite Mastercard\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        30]: "Citi AAdvantage Platinum Select World Elite Mastercard\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        30]: "Citi AAdvantage Platinum Select World Elite Mastercard\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        30]: "Citi AAdvantage Platinum Select World Elite Mastercard\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        30]: "Citi AAdvantage Platinum Select World Elite Mastercard\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        30]: "Citi AAdvantage Platinum Select World Elite Mastercard\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        30]: "Citi AAdvantage Platinum Select World Elite Mastercard\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        30]: "Citi AAdvantage Platinum Select World Elite Mastercard\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        30]: "Citi AAdvantage Platinum Select World Elite Mastercard\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        30]: "Citi AAdvantage Platinum Select World Elite Mastercard\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[
        30]: "Citi AAdvantage Platinum Select World Elite Mastercard\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        30]: "Citi AAdvantage Platinum Select World Elite Mastercard\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        30]: "Citi AAdvantage Platinum Select World Elite Mastercard\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        30]: "Citi AAdvantage Platinum Select World Elite Mastercard\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program",

    card_list_ak_ihg[
        31]: "Citi AAdvantage Executive World Elite Mastercard\n\nUsing the Alaska Mileage Plan rewards program and the IHG Rewards program",
    card_list_am_ihg[
        31]: "Citi AAdvantage Executive World Elite Mastercard\n\nUsing the American AAdvantage rewards program and the IHG Rewards program",
    card_list_dl_ihg[
        31]: "Citi AAdvantage Executive World Elite Mastercard\n\nUsing the Delta SkyMiles program and the IHG Rewards program",
    card_list_jb_ihg[
        31]: "Citi AAdvantage Executive World Elite Mastercard\n\nUsing the JetBlue TrueBlue rewards program and the IHG Rewards program",
    card_list_sw_ihg[
        31]: "Citi AAdvantage Executive World Elite Mastercard\n\nUsing the Southwest Rapid Rewards program and the IHG Rewards program",
    card_list_un_ihg[
        31]: "Citi AAdvantage Executive World Elite Mastercard\n\nUsing the United MileagePlus rewards program and the IHG Rewards program",
    card_list_ak_hil[
        31]: "Citi AAdvantage Executive World Elite Mastercard\n\nUsing the Alaska Mileage Plan rewards program and the Hilton Honors rewards program",
    card_list_am_hil[
        31]: "Citi AAdvantage Executive World Elite Mastercard\n\nUsing the American AAdvantage rewards program and the Hilton Honors rewards program",
    card_list_dl_hil[
        31]: "Citi AAdvantage Executive World Elite Mastercard\n\nUsing the Delta SkyMiles program and the Hilton Honors rewards program",
    card_list_jb_hil[
        31]: "Citi AAdvantage Executive World Elite Mastercard\n\nUsing the JetBlue TrueBlue rewards program and the Hilton Honors rewards program",
    card_list_sw_hil[
        31]: "Citi AAdvantage Executive World Elite Mastercard\n\nUsing the Southwest Rapid Rewards program and the Hilton Honors rewards program",
    card_list_un_hil[
        31]: "Citi AAdvantage Executive World Elite Mastercard\n\nUsing the United MileagePlus rewards program and the Hilton Honors rewards program",
    card_list_ak_hya[
        31]: "Citi AAdvantage Executive World Elite Mastercard\n\nUsing the Alaska Mileage Plan rewards program and the World of Hyatt rewards program",
    card_list_am_hya[
        31]: "Citi AAdvantage Executive World Elite Mastercard\n\nUsing the American AAdvantage rewards program and the World of Hyatt rewards program",
    card_list_dl_hya[
        31]: "Citi AAdvantage Executive World Elite Mastercard\n\nUsing the Delta SkyMiles program and the World of Hyatt rewards program",
    card_list_jb_hya[
        31]: "Citi AAdvantage Executive World Elite Mastercard\n\nUsing the JetBlue TrueBlue rewards program and the World of Hyatt rewards program",
    card_list_sw_hya[
        31]: "Citi AAdvantage Executive World Elite Mastercard\n\nUsing the Southwest Rapid Rewards program and the World of Hyatt rewards program",
    card_list_un_hya[
        31]: "Citi AAdvantage Executive World Elite Mastercard\n\nUsing the United MileagePlus rewards program and the World of Hyatt rewards program",
    card_list_ak_mar[
        31]: "Citi AAdvantage Executive World Elite Mastercard\n\nUsing the Alaska Mileage Plan rewards program and the Marriott Rewards program",
    card_list_am_mar[
        31]: "Citi AAdvantage Executive World Elite Mastercard\n\nUsing the American AAdvantage rewards program and the Marriott Rewards program",
    card_list_dl_mar[
        31]: "Citi AAdvantage Executive World Elite Mastercard\n\nUsing the Delta SkyMiles program and the Marriott Rewards program",
    card_list_jb_mar[
        31]: "Citi AAdvantage Executive World Elite Mastercard\n\nUsing the JetBlue TrueBlue rewards program and the Marriott Rewards program",
    card_list_sw_mar[
        31]: "Citi AAdvantage Executive World Elite Mastercard\n\nUsing the Southwest Rapid Rewards program and the Marriott Rewards program",
    card_list_un_mar[
        31]: "Citi AAdvantage Executive World Elite Mastercard\n\nUsing the United MileagePlus rewards program and the Marriott Rewards program"
}

card_list_ak_ihg.sort(reverse=True)
card_list_am_ihg.sort(reverse=True)
card_list_dl_ihg.sort(reverse=True)
card_list_jb_ihg.sort(reverse=True)
card_list_sw_ihg.sort(reverse=True)
card_list_un_ihg.sort(reverse=True)

card_list_ak_hil.sort(reverse=True)
card_list_am_hil.sort(reverse=True)
card_list_dl_hil.sort(reverse=True)
card_list_jb_hil.sort(reverse=True)
card_list_sw_hil.sort(reverse=True)
card_list_un_hil.sort(reverse=True)

card_list_ak_hya.sort(reverse=True)
card_list_am_hya.sort(reverse=True)
card_list_dl_hya.sort(reverse=True)
card_list_jb_hya.sort(reverse=True)
card_list_sw_hya.sort(reverse=True)
card_list_un_hya.sort(reverse=True)

card_list_ak_mar.sort(reverse=True)
card_list_am_mar.sort(reverse=True)
card_list_dl_mar.sort(reverse=True)
card_list_jb_mar.sort(reverse=True)
card_list_sw_mar.sort(reverse=True)
card_list_un_mar.sort(reverse=True)

cards = []
for item in [card_list_ak_ihg, card_list_am_ihg, card_list_dl_ihg, card_list_jb_ihg, card_list_sw_ihg,
             card_list_un_ihg,
             card_list_ak_hil, card_list_am_hil, card_list_dl_hil, card_list_jb_hil, card_list_sw_hil,
             card_list_un_hil,
             card_list_ak_hya, card_list_am_hya, card_list_dl_hya, card_list_jb_hya, card_list_sw_hya, card_list_un_hya,
             card_list_ak_mar, card_list_am_mar, card_list_dl_mar, card_list_jb_mar, card_list_sw_mar,
             card_list_un_mar]:
    for value in item:
        cards.append(value)

cards.sort(reverse=True)

cards_budget = []
for item in [card_list_ak_ihg[4:8], card_list_ak_ihg[10:12], card_list_ak_ihg[13:15],
             card_list_ak_ihg[20:23], card_list_ak_ihg[25:31], card_list_am_ihg[4:8],
             card_list_am_ihg[10:12], card_list_am_ihg[13:15],
             card_list_am_ihg[20:23], card_list_am_ihg[25:
                                                       31], card_list_dl_ihg[4:8], card_list_dl_ihg[10:12],
             card_list_dl_ihg[13:15], card_list_dl_ihg[20:23],
             card_list_dl_ihg[25:31], card_list_jb_ihg[4:
                                                       8], card_list_jb_ihg[10:12], card_list_jb_ihg[13:15],
             card_list_jb_ihg[20:23], card_list_jb_ihg[25:31],
             card_list_sw_ihg[4:8], card_list_sw_ihg[10:12], card_list_sw_ihg[13:15],
             card_list_sw_ihg[20:23], card_list_sw_ihg[25:31], card_list_un_ihg[4:8],
             card_list_un_ihg[10:12], card_list_un_ihg[13:15],
             card_list_un_ihg[20:23], card_list_un_ihg[25:31],
             card_list_ak_hil[4:8], card_list_ak_hil[10:12], card_list_ak_hil[13:
                                                                              15], card_list_ak_hil[20:23], card_list_ak_hil[25:31], card_list_am_hil[4:8],
             card_list_am_hil[10:12], card_list_am_hil[13:15],
             card_list_am_hil[20:23], card_list_am_hil[25:
                                                       31], card_list_dl_hil[4:8], card_list_dl_hil[10:12],
             card_list_dl_hil[13:15], card_list_dl_hil[20:23],
             card_list_dl_hil[25:31], card_list_jb_hil[4:
                                                       8], card_list_jb_hil[10:12], card_list_jb_hil[13:15],
             card_list_jb_hil[20:23], card_list_jb_hil[25:31],
             card_list_sw_hil[4:8], card_list_sw_hil[10:12], card_list_sw_hil[13:
                                                                              15], card_list_sw_hil[20:23], card_list_sw_hil[25:31], card_list_un_hil[4:8],
             card_list_un_hil[10:12], card_list_un_hil[13:15],
             card_list_un_hil[20:23], card_list_un_hil[25:31],
             card_list_ak_hya[4:8], card_list_ak_hya[10:12], card_list_ak_hya[13:
                                                                              15], card_list_ak_hya[20:23], card_list_ak_hya[25:31], card_list_am_hya[4:8],
             card_list_am_hya[10:12], card_list_am_hya[13:15],
             card_list_am_hya[20:23], card_list_am_hya[25:
                                                       31], card_list_dl_hya[4:8], card_list_dl_hya[10:12],
             card_list_dl_hya[13:15], card_list_dl_hya[20:23],
             card_list_dl_hya[25:31], card_list_jb_hya[4:
                                                       8], card_list_jb_hya[10:12], card_list_jb_hya[13:15],
             card_list_jb_hya[20:23], card_list_jb_hya[25:31],
             card_list_sw_hya[4:8], card_list_sw_hya[10:12], card_list_sw_hya[13:
                                                                              15], card_list_sw_hya[20:23], card_list_sw_hya[25:31], card_list_un_hya[4:8],
             card_list_un_hya[10:12], card_list_un_hya[13:15],
             card_list_un_hya[20:23], card_list_un_hya[25:31],
             card_list_ak_mar[4:8], card_list_ak_mar[10:12], card_list_ak_mar[13:
                                                                              15], card_list_ak_mar[20:23], card_list_ak_mar[25:31], card_list_am_mar[4:8],
             card_list_am_mar[10:12], card_list_am_mar[13:15],
             card_list_am_mar[20:23], card_list_am_mar[25:
                                                       31], card_list_dl_mar[4:8], card_list_dl_mar[10:12],
             card_list_dl_mar[13:15], card_list_dl_mar[20:23],
             card_list_dl_mar[25:31], card_list_jb_mar[4:
                                                       8], card_list_jb_mar[10:12], card_list_jb_mar[13:15],
             card_list_jb_mar[20:23], card_list_jb_mar[25:31],
             card_list_sw_mar[4:8], card_list_sw_mar[10:12], card_list_sw_mar[13:
                                                                              15], card_list_sw_mar[20:23], card_list_sw_mar[25:31], card_list_un_mar[4:8],
             card_list_un_mar[10:12], card_list_un_mar[13:15],
             card_list_un_mar[20:23], card_list_un_mar[25:31]]:
    for value in item:
        cards_budget.append(value)
cards_budget.append(card_list_ak_ihg[16])
cards_budget.append(card_list_ak_ihg[18])
cards_budget.append(card_list_am_ihg[16])
cards_budget.append(card_list_am_ihg[18])
cards_budget.append(card_list_dl_ihg[16])
cards_budget.append(card_list_dl_ihg[18])
cards_budget.append(card_list_jb_ihg[16])
cards_budget.append(card_list_jb_ihg[18])
cards_budget.append(card_list_sw_ihg[16])
cards_budget.append(card_list_sw_ihg[18])
cards_budget.append(card_list_un_ihg[16])
cards_budget.append(card_list_un_ihg[18])
cards_budget.append(card_list_ak_hil[16])
cards_budget.append(card_list_ak_hil[18])
cards_budget.append(card_list_am_hil[16])
cards_budget.append(card_list_am_hil[18])
cards_budget.append(card_list_dl_hil[16])
cards_budget.append(card_list_dl_hil[18])
cards_budget.append(card_list_jb_hil[16])
cards_budget.append(card_list_jb_hil[18])
cards_budget.append(card_list_sw_hil[16])
cards_budget.append(card_list_sw_hil[18])
cards_budget.append(card_list_un_hil[16])
cards_budget.append(card_list_un_hil[18])
cards_budget.append(card_list_ak_hya[16])
cards_budget.append(card_list_ak_hya[18])
cards_budget.append(card_list_am_hya[16])
cards_budget.append(card_list_am_hya[18])
cards_budget.append(card_list_dl_hya[16])
cards_budget.append(card_list_dl_hya[18])
cards_budget.append(card_list_jb_hya[16])
cards_budget.append(card_list_jb_hya[18])
cards_budget.append(card_list_sw_hya[16])
cards_budget.append(card_list_sw_hya[18])
cards_budget.append(card_list_un_hya[16])
cards_budget.append(card_list_un_hya[18])
cards_budget.append(card_list_ak_mar[16])
cards_budget.append(card_list_ak_mar[18])
cards_budget.append(card_list_am_mar[16])
cards_budget.append(card_list_am_mar[18])
cards_budget.append(card_list_dl_mar[16])
cards_budget.append(card_list_dl_mar[18])
cards_budget.append(card_list_jb_mar[16])
cards_budget.append(card_list_jb_mar[18])
cards_budget.append(card_list_sw_mar[16])
cards_budget.append(card_list_sw_mar[18])
cards_budget.append(card_list_un_mar[16])
cards_budget.append(card_list_un_mar[18])
cards_budget.sort(reverse=True)

# TODO Do the above for budget and free cards

# TODO Post to html following prints:
credit_cards_all = deepcopy(credit_cards)
first = credit_cards_all[cards[0]]
credit_cards_all.pop(cards[0])
second = credit_cards_all[cards[1]]
credit_cards_all.pop(cards[1])
third = credit_cards_all[cards[2]]

credit_cards_budget = deepcopy(credit_cards)
first_budget = credit_cards_budget[cards_budget[0]]
credit_cards_budget.pop(cards_budget[0])
second_budget = credit_cards_budget[cards_budget[1]]
credit_cards_budget.pop(cards_budget[1])
third_budget = credit_cards_budget[cards_budget[2]]

print(f'''\n\n{'* ' * 60}\n
The Best Cards For You:\n
1. {first}\n\n
2. {second}\n\n
3. {third}\n\n\n
The Best Cards With An Annual Fee Of Under $100 For You:\n
1. {first_budget}\n\n
2. {second_budget}\n\n
3. {third_budget}\n
{'* ' * 60}''')
