/*
gun
*/


/*
 *Progcessed By JSDec in 3.90s
 *JSDec - JSDec.js.org
 */
const $ = new Env('组队瓜分京豆');
const jdCookieNode = $['isNode']() ? require('./jdCookie.js') : '';
const notify = $['isNode']() ? require('./sendNotify') : '';
let cookiesArr = [],
    cookie = '';
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x3ab7b4 => {
        cookiesArr['push'](jdCookieNode[_0x3ab7b4]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
} else {
    cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ...jsonParse($['getdata']('CookiesJD') || '[]')['map'](_0x354aa8 => _0x354aa8['cookie'])]['filter'](_0x1e0fc3 => !!_0x1e0fc3);
}
let guaopencard_addSku = ![];
let activityCookie = '';
let lz_jdpin_token = '';
const JD_API_HOST = 'https://api.m.jd.com/client.action';
message = '';
!(async () => {
    var _0x278e78 = {
        'BdGff': function(_0x5a73b0) {
            return _0x5a73b0();
        },
        'ORXgU': function(_0x38d93e, _0xa83490) {
            return _0x38d93e == _0xa83490;
        },
        'KyoZn': '【提示】请先获取cookie\n直接使用NobyDa的京东签到获取',
        'vLfBq': 'https://bean.m.jd.com/',
        'aeliz': function(_0x34f7cb, _0x29b6be) {
            return _0x34f7cb > _0x29b6be;
        },
        'QPPHB': function(_0x4cec25, _0x534f24) {
            return _0x4cec25 === _0x534f24;
        },
        'ZrCGD': 'MDFnr',
        'LSojg': 'XXWay',
        'WYRHO': '73df90b69caf474fb90bba56bc7cd3b8',
        'LXUtT': '599119',
        'omtnw': 'https://img10.360buyimg.com/imgzone/jfs/t1/21383/2/6633/3879/5c5138d8E0967ccf2/91da57c5e2166005.jpg',
        'TSXdn': 'lCgqa89RDFhTTgXPyHxpYBZ%2F%2BrKQoggHwKcj3bjOW9WAuJ9EExbqSricnEiBLbnP',
        'ededA': 'mseweb',
        'GubgH': function(_0x3ee150, _0x4d50c3) {
            return _0x3ee150 < _0x4d50c3;
        },
        'tvnuB': 'WJCCd',
        'lNyaG': 'BWIwS',
        'MRRis': function(_0x55fdcf, _0x2b40bd) {
            return _0x55fdcf === _0x2b40bd;
        },
        'Otjog': 'HLVdX',
        'maaog': 'YAbMK',
        'fyqSM': function(_0x28a1e0, _0xeabc03) {
            return _0x28a1e0(_0xeabc03);
        },
        'eeMSx': function(_0x19ff46, _0x2e83f9) {
            return _0x19ff46 + _0x2e83f9;
        },
        'jgLUe': function(_0x121d74) {
            return _0x121d74();
        },
        'zltlf': function(_0x464c56, _0xda458f) {
            return _0x464c56 > _0xda458f;
        },
        'IGmVB': function(_0x5ac2d4, _0x27c220) {
            return _0x5ac2d4 !== _0x27c220;
        },
        'kzCVF': 'iUQwh',
        'kvMbi': 'xeqMK',
        'KtkBh': function(_0x414f57, _0x58f504) {
            return _0x414f57 <= _0x58f504;
        }
    };
    if (!cookiesArr[0x0]) {
        $['msg']($['name'], _0x278e78['KyoZn'], _0x278e78['vLfBq'], {
            'open-url': _0x278e78['vLfBq']
        });
        return;
    }
    if (_0x278e78['aeliz'](new Date()['getTime'](), 0x17c1daf4c00)) {
        if (_0x278e78['QPPHB'](_0x278e78['ZrCGD'], _0x278e78['LSojg'])) {
            console['log'](data);
        } else {
            $['done']();
            return;
        }
    }
    $['residualPercentage'] = 0x0;
    $['activityId'] = _0x278e78['WYRHO'];
    $['userId'] = _0x278e78['LXUtT'];
    $['inviterImg'] = _0x278e78['omtnw'];
    $['inviter'] = _0x278e78['TSXdn'];
    $['inviterNick'] = _0x278e78['ededA'];
    $['venderId'] = _0x278e78['LXUtT'];
    console['log']('入口:\nhttps://cjhydz-isv.isvjcloud.com/microDz/invite/activity/wx/view/index?activityId=' + $['activityId'] + '&venderId=' + $['venderId']);
    for (let _0x460737 = 0x0; _0x278e78['GubgH'](_0x460737, cookiesArr['length']); _0x460737++) {
        if (_0x278e78['QPPHB'](_0x278e78['tvnuB'], _0x278e78['lNyaG'])) {
            _0x278e78['BdGff'](resolve);
        } else {
            cookie = cookiesArr[_0x460737];
            if (cookie) {
                if (_0x278e78['MRRis'](_0x278e78['Otjog'], _0x278e78['maaog'])) {
                    $['done']();
                    return;
                } else {
                    $['UserName'] = _0x278e78['fyqSM'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
                    $['index'] = _0x278e78['eeMSx'](_0x460737, 0x1);
                    _0x278e78['jgLUe'](getUA);
                    if (_0x278e78['zltlf'](new Date()['getTime'](), 0x17c1daf4c00)) {
                        if (_0x278e78['IGmVB'](_0x278e78['kzCVF'], _0x278e78['kvMbi'])) {
                            $['done']();
                            return;
                        } else {
                            if (_0x278e78['ORXgU'](type, 0x1)) console['log']('京豆剩余' + res['data']['residualPercentage'] + '%');
                            $['residualPercentage'] = res['data']['residualPercentage'];
                        }
                    }
                    $['nickName'] = '';
                    console['log']('\n\n******开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '*********\n');
                    await _0x278e78['jgLUe'](run);
                    if (_0x278e78['ORXgU'](_0x460737, 0x0) && (!$['inviter'] || !$['inviterImg'] || !$['inviterNick'])) return;
                    if (_0x278e78['KtkBh']($['residualPercentage'], 0x0)) return;
                }
            }
        }
    }
})()['catch'](_0x521fab => $['logErr'](_0x521fab))['finally'](() => $['done']());
async function run() {
    var _0x3e260e = {
        'txpoS': function(_0x12da01) {
            return _0x12da01();
        },
        'ILUti': function(_0x3305c7, _0x9bbc77) {
            return _0x3305c7 != _0x9bbc77;
        },
        'XmCKt': 'object',
        'vxKkl': function(_0x17156e, _0x5bba66) {
            return _0x17156e > _0x5bba66;
        },
        'FSujI': 'lz_jdpin_token=',
        'exjtT': function(_0x2052a2, _0x4531f0) {
            return _0x2052a2 + _0x4531f0;
        },
        'rOieB': 'LZ_TOKEN_KEY=',
        'uNSXO': function(_0x3ec6df, _0x4d6462) {
            return _0x3ec6df + _0x4d6462;
        },
        'SNdIg': function(_0x260968, _0x47ace1) {
            return _0x260968 > _0x47ace1;
        },
        'rmKIt': 'LZ_TOKEN_VALUE=',
        'TpzdA': function(_0x55d802, _0x484feb) {
            return _0x55d802 + _0x484feb;
        },
        'IertP': 'https://img10.360buyimg.com/imgzone/jfs/t1/21383/2/6633/3879/5c5138d8E0967ccf2/91da57c5e2166005.jpg',
        'UQGFs': function(_0x31e126) {
            return _0x31e126();
        },
        'EwZXU': function(_0x53fe07, _0x2b6468) {
            return _0x53fe07 === _0x2b6468;
        },
        'WgFGp': 'FfMUq',
        'FjWbc': 'JEGpe',
        'cIkVs': function(_0x370179) {
            return _0x370179();
        },
        'MyVcG': function(_0x2972b9, _0x31409f) {
            return _0x2972b9 == _0x31409f;
        },
        'EOFaA': 'qqYWQ',
        'XCqlv': 'jXnvT',
        'DtroN': '获取[token]失败！',
        'UPQPO': function(_0x4f2806) {
            return _0x4f2806();
        },
        'EbDMW': function(_0x1076e5) {
            return _0x1076e5();
        },
        'UPVDM': function(_0x1bb69a, _0x378ffc) {
            return _0x1bb69a == _0x378ffc;
        },
        'HGYyT': function(_0x1292c9, _0x29f33d) {
            return _0x1292c9 == _0x29f33d;
        },
        'hHpFI': '获取[Pin]失败！',
        'mQDIa': function(_0x7cb864, _0x20652b) {
            return _0x7cb864 !== _0x20652b;
        },
        'WqBex': 'GpDDk',
        'xdAqD': function(_0x450c39, _0xdcba49) {
            return _0x450c39(_0xdcba49);
        },
        'xuHAu': function(_0x4fcf72, _0x5c5d15) {
            return _0x4fcf72 <= _0x5c5d15;
        },
        'Kzoxy': function(_0xed8918, _0x5787e8, _0x264bef) {
            return _0xed8918(_0x5787e8, _0x264bef);
        },
        'vGyAA': function(_0x5ac301, _0x5bd694) {
            return _0x5ac301 + _0x5bd694;
        },
        'qSOWD': function(_0x1dbdcd, _0x543de2) {
            return _0x1dbdcd * _0x543de2;
        },
        'XKedl': 'eOHFL',
        'URhRk': 'RSgqY',
        'YoxrY': 'fFeiw',
        'VyXmo': function(_0x47f911, _0x46e496) {
            return _0x47f911(_0x46e496);
        },
        'qoPwp': function(_0x4142ac, _0x4b4411) {
            return _0x4142ac === _0x4b4411;
        },
        'kVnAA': 'sHqql',
        'dZwqY': 'IMvyu',
        'yOelU': '[venderId]获取失败！',
        'EzUKp': function(_0xbbb3e0, _0x4975d9) {
            return _0xbbb3e0 > _0x4975d9;
        },
        'ZSVRL': function(_0x259b66, _0x42035b) {
            return _0x259b66 === _0x42035b;
        },
        'PUsZV': 'IrTpg',
        'BSuSO': 'bRBEf',
        'ACuRY': function(_0x48d577, _0x54e33f, _0x41f458) {
            return _0x48d577(_0x54e33f, _0x41f458);
        },
        'oxAQv': function(_0x3e5fa5, _0xd025be) {
            return _0x3e5fa5 + _0xd025be;
        },
        'wILlB': function(_0x51fccd, _0x372c5c) {
            return _0x51fccd(_0x372c5c);
        },
        'JXgJc': function(_0x515748, _0x54cb3d) {
            return _0x515748(_0x54cb3d);
        },
        'EkiDS': function(_0x445c01) {
            return _0x445c01();
        }
    };
    try {
        lz_jdpin_token = '';
        $['isvObfuscatorToken'] = $['secretPin'] = $['inviteeNick'] = '';
        $['inJoinTeam'] = ![];
        $['openCarList'] = [];
        $['attrTouXiang'] = _0x3e260e['IertP'];
        await _0x3e260e['UQGFs'](getCk);
        if (_0x3e260e['SNdIg'](new Date()['getTime'](), 0x17c1daf4c00)) {
            if (_0x3e260e['EwZXU'](_0x3e260e['WgFGp'], _0x3e260e['FjWbc'])) {
                for (let _0x558312 of res['result']['giftInfo']['giftList']) {
                    console['log']('入会获得:' + _0x558312['discountString'] + _0x558312['prizeName'] + _0x558312['secondLineDesc']);
                }
            } else {
                $['done']();
                return;
            }
        }
        await _0x3e260e['cIkVs'](getToken);
        if (_0x3e260e['MyVcG']($['Token'], '')) {
            if (_0x3e260e['EwZXU'](_0x3e260e['EOFaA'], _0x3e260e['XCqlv'])) {
                $['done']();
                return;
            } else {
                console['log'](_0x3e260e['DtroN']);
                return;
            }
        }
        await _0x3e260e['UPQPO'](getMyPing);
        await _0x3e260e['UPQPO'](getCk1);
        await _0x3e260e['EbDMW'](getSystemConfig);
        if (_0x3e260e['UPVDM']($['secretPin'], '') || _0x3e260e['HGYyT']($['inviteeNick'], '')) {
            $['log'](_0x3e260e['hHpFI']);
            return;
        }
        if (_0x3e260e['SNdIg'](new Date()['getTime'](), 0x17c1daf4c00)) {
            if (_0x3e260e['mQDIa'](_0x3e260e['WqBex'], _0x3e260e['WqBex'])) {
                _0x3e260e['txpoS'](resolve);
            } else {
                $['done']();
                return;
            }
        }
        await _0x3e260e['xdAqD'](getActivityInfo, 0x1);
        if (_0x3e260e['xuHAu']($['residualPercentage'], 0x0)) return;
        await _0x3e260e['EbDMW'](accesslog1);
        await _0x3e260e['EbDMW'](accesslog);
        await _0x3e260e['EbDMW'](isInvited);
        if ($['inJoinTeam']) {
            await $['wait'](_0x3e260e['Kzoxy'](parseInt, _0x3e260e['vGyAA'](_0x3e260e['qSOWD'](Math['random'](), 0x3e8), 0x5dc), 0xa));
            await _0x3e260e['xdAqD'](getOpenCardAllStatuesNew, 0x1);
            let _0xe42e9d = ![];
            for (let _0x538da9 of $['openCarList']) {
                if (_0x3e260e['mQDIa'](_0x3e260e['XKedl'], _0x3e260e['XKedl'])) {
                    console['log']('isInvited ' + (res['errorMessage'] || ''));
                } else {
                    if (_0x3e260e['EwZXU'](_0x538da9['statue'], ![])) {
                        console['log'](_0x538da9['shopName']);
                        let _0x54f411 = _0x538da9['openCardLink']['match'](/venderId=([\d]+)/) && _0x538da9['openCardLink']['match'](/venderId=([\d]+)/)[0x1] || '';
                        if (_0x54f411) {
                            if (_0x3e260e['mQDIa'](_0x3e260e['URhRk'], _0x3e260e['YoxrY'])) {
                                await _0x3e260e['VyXmo'](join, _0x54f411);
                                await $['wait'](0x3e8);
                                _0xe42e9d = !![];
                            } else {
                                $['done']();
                                return;
                            }
                        } else {
                            if (_0x3e260e['qoPwp'](_0x3e260e['kVnAA'], _0x3e260e['dZwqY'])) {
                                if (_0x3e260e['ILUti'](typeof setcookies, _0x3e260e['XmCKt'])) {
                                    setcookie = setcookies['split'](',');
                                } else setcookie = setcookies;
                                for (let _0x5b5696 of setcookie) {
                                    let _0x60e0ba = _0x5b5696['split'](';')[0x0]['trim']();
                                    if (_0x60e0ba['split']('=')[0x1]) {
                                        if (_0x3e260e['vxKkl'](_0x60e0ba['indexOf'](_0x3e260e['FSujI']), -0x1)) lz_jdpin_token = _0x3e260e['exjtT'](_0x60e0ba['replace'](/ /g, ''), ';');
                                        if (_0x3e260e['vxKkl'](_0x60e0ba['indexOf'](_0x3e260e['rOieB']), -0x1)) LZ_TOKEN_KEY = _0x3e260e['uNSXO'](_0x60e0ba['replace'](/ /g, ''), ';');
                                        if (_0x3e260e['SNdIg'](_0x60e0ba['indexOf'](_0x3e260e['rmKIt']), -0x1)) LZ_TOKEN_VALUE = _0x3e260e['TpzdA'](_0x60e0ba['replace'](/ /g, ''), ';');
                                    }
                                }
                            } else {
                                console['log'](_0x3e260e['yOelU']);
                            }
                        }
                    }
                }
            }
            if (_0x3e260e['EzUKp'](new Date()['getTime'](), 0x17c1daf4c00)) {
                if (_0x3e260e['ZSVRL'](_0x3e260e['PUsZV'], _0x3e260e['BSuSO'])) {
                    $['done']();
                    return;
                } else {
                    $['done']();
                    return;
                }
            }
            if (_0xe42e9d) await _0x3e260e['EbDMW'](accesslog);
            if (_0xe42e9d) $['wait'](_0x3e260e['ACuRY'](parseInt, _0x3e260e['oxAQv'](_0x3e260e['qSOWD'](Math['random'](), 0x3e8), 0x5dc), 0xa));
            if (_0xe42e9d) await _0x3e260e['wILlB'](getOpenCardAllStatuesNew, 0x1);
            await _0x3e260e['JXgJc'](getActivityInfo, 0x0);
            await _0x3e260e['EkiDS'](accesslog1);
        }
        if (_0x3e260e['EzUKp'](new Date()['getTime'](), 0x17c1daf4c00)) {
            $['done']();
            return;
        }
    } catch (_0x52516b) {
        console['log'](_0x52516b);
    }
}

function getshopactivityId(_0x1e85d3) {
    var _0x2c0a4b = {
        'xEMHy': function(_0x50f5c3) {
            return _0x50f5c3();
        },
        'btYki': '【提示】请先获取cookie\n直接使用NobyDa的京东签到获取',
        'MKrlV': 'https://bean.m.jd.com/',
        'lMvuv': function(_0x81e359, _0x13fb16) {
            return _0x81e359 == _0x13fb16;
        },
        'ycHah': function(_0x22e132, _0x3238e9) {
            return _0x22e132 !== _0x3238e9;
        },
        'awKvW': 'IVGLx',
        'icWcC': 'IPTeF',
        'ZJere': function(_0x1c030d, _0x553c9e) {
            return _0x1c030d === _0x553c9e;
        },
        'QTbMv': 'QVocZ',
        'xXcCd': 'jsYrv',
        'JwtUC': 'ZUYCt',
        'InQsh': 'wlgYE',
        'fkwXn': function(_0x6a0a49) {
            return _0x6a0a49();
        },
        'Zofnj': function(_0x459d40, _0x288870) {
            return _0x459d40(_0x288870);
        }
    };
    return new Promise(_0x3fa82c => {
        $['get'](_0x2c0a4b['Zofnj'](shopactivityId, '' + _0x1e85d3), async (_0x4679bc, _0x1875bf, _0x1f5afe) => {
            var _0x28976c = {
                'cTlAx': function(_0x564443) {
                    return _0x2c0a4b['xEMHy'](_0x564443);
                },
                'MtgjB': _0x2c0a4b['btYki'],
                'TIEin': _0x2c0a4b['MKrlV']
            };
            try {
                _0x1f5afe = JSON['parse'](_0x1f5afe);
                if (_0x2c0a4b['lMvuv'](_0x1f5afe['success'], !![])) {
                    if (_0x2c0a4b['ycHah'](_0x2c0a4b['awKvW'], _0x2c0a4b['icWcC'])) {
                        $['shopactivityId'] = _0x1f5afe['result']['interestsRuleList'] && _0x1f5afe['result']['interestsRuleList'][0x0] && _0x1f5afe['result']['interestsRuleList'][0x0]['interestsInfo'] && _0x1f5afe['result']['interestsRuleList'][0x0]['interestsInfo']['activityId'] || '';
                    } else {
                        console['log']('' + JSON['stringify'](_0x4679bc));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    }
                }
            } catch (_0x396add) {
                if (_0x2c0a4b['ZJere'](_0x2c0a4b['QTbMv'], _0x2c0a4b['xXcCd'])) {
                    _0x28976c['cTlAx'](_0x3fa82c);
                } else {
                    $['logErr'](_0x396add, _0x1875bf);
                }
            } finally {
                if (_0x2c0a4b['ycHah'](_0x2c0a4b['JwtUC'], _0x2c0a4b['InQsh'])) {
                    _0x2c0a4b['fkwXn'](_0x3fa82c);
                } else {
                    $['msg']($['name'], _0x28976c['MtgjB'], _0x28976c['TIEin'], {
                        'open-url': _0x28976c['TIEin']
                    });
                    return;
                }
            }
        });
    });
}

function shopactivityId(_0x3a8443) {
    var _0x317f2c = {
        'IsVlG': 'text/plain; Charset=UTF-8',
        'ZCjsy': 'https://api.m.jd.com',
        'fPOBS': 'api.m.jd.com',
        'KOgcN': '*/*',
        'JMjhX': 'application/x-www-form-urlencoded'
    };
    return {
        'url': 'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=getShopOpenCardInfo&body=%7B%22venderId%22%3A%22' + _0x3a8443 + '%22%2C%22channel%22%3A401%7D&client=H5&clientVersion=9.2.0&uuid=88888',
        'headers': {
            'Content-Type': _0x317f2c['IsVlG'],
            'Origin': _0x317f2c['ZCjsy'],
            'Host': _0x317f2c['fPOBS'],
            'accept': _0x317f2c['KOgcN'],
            'User-Agent': $['UA'],
            'content-type': _0x317f2c['JMjhX'],
            'Referer': 'https://shopmember.m.jd.com/shopcard/?venderId=' + _0x3a8443 + '&shopId=' + _0x3a8443 + '&venderType=5&channel=401&returnUrl=https://cjhydz-isv.isvjcloud.com/microDz/invite/activity/wx/view/index/5802011?activityId=' + $['activityId'] + '&shareUuid=' + $['shareUuid'],
            'Cookie': cookie
        }
    };
}

function join(_0x59e3ae) {
    var _0x34de5e = {
        'OHNeo': function(_0x492318, _0x43d62b) {
            return _0x492318 == _0x43d62b;
        },
        'iuWnG': 'string',
        'QAPWj': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie',
        'aYRfc': '获取[token]失败！',
        'OJzJU': function(_0x7b3f07, _0x45d869) {
            return _0x7b3f07 === _0x45d869;
        },
        'bopYB': 'whmpl',
        'VfIkx': function(_0x5db7d5, _0x135f30) {
            return _0x5db7d5 == _0x135f30;
        },
        'UwKJW': 'object',
        'Uaooh': function(_0x1752ba, _0x4d1643) {
            return _0x1752ba !== _0x4d1643;
        },
        'etDmC': 'otZAD',
        'SgLLy': 'Xgdut',
        'XXuEM': 'poZAU',
        'MVUat': 'ZAzJW',
        'faLap': 'xbrhM',
        'DlBIz': 'ZvTsX',
        'gGLkg': function(_0x19d095) {
            return _0x19d095();
        },
        'fDFNK': function(_0x395949, _0x2bdb48) {
            return _0x395949(_0x2bdb48);
        }
    };
    return new Promise(async _0x133b02 => {
        var _0x161bd1 = {
            'jsbfG': function(_0x179521, _0x301b07) {
                return _0x34de5e['OHNeo'](_0x179521, _0x301b07);
            },
            'EGMjJ': _0x34de5e['iuWnG'],
            'wWBop': _0x34de5e['QAPWj'],
            'yJIgC': _0x34de5e['aYRfc'],
            'btvVD': function(_0x52ba79, _0x4ef8a1) {
                return _0x34de5e['OJzJU'](_0x52ba79, _0x4ef8a1);
            },
            'kCxNR': _0x34de5e['bopYB'],
            'TmEyv': function(_0x3e6b37, _0x35899e) {
                return _0x34de5e['VfIkx'](_0x3e6b37, _0x35899e);
            },
            'FZjwI': _0x34de5e['UwKJW'],
            'bFSfR': function(_0xfd45c7, _0x3c6c5a) {
                return _0x34de5e['Uaooh'](_0xfd45c7, _0x3c6c5a);
            },
            'eZUiL': _0x34de5e['etDmC'],
            'rIYYA': _0x34de5e['SgLLy'],
            'lPXdB': _0x34de5e['XXuEM'],
            'XOQNI': _0x34de5e['MVUat'],
            'JJuYP': function(_0x5ae7b6, _0x5ae862) {
                return _0x34de5e['VfIkx'](_0x5ae7b6, _0x5ae862);
            },
            'WTdUd': _0x34de5e['faLap'],
            'CgROM': _0x34de5e['DlBIz'],
            'KOxba': function(_0x2270af) {
                return _0x34de5e['gGLkg'](_0x2270af);
            }
        };
        $['shopactivityId'] = '';
        await $['wait'](0x3e8);
        await _0x34de5e['fDFNK'](getshopactivityId, _0x59e3ae);
        $['get'](_0x34de5e['fDFNK'](ruhui, '' + _0x59e3ae), async (_0x1cfb79, _0x1867af, _0x14e8d6) => {
            var _0x513260 = {
                'XdsZS': _0x161bd1['yJIgC']
            };
            try {
                if (_0x161bd1['btvVD'](_0x161bd1['kCxNR'], _0x161bd1['kCxNR'])) {
                    res = $['toObj'](_0x14e8d6);
                    if (_0x161bd1['TmEyv'](typeof res, _0x161bd1['FZjwI'])) {
                        if (_0x161bd1['bFSfR'](_0x161bd1['eZUiL'], _0x161bd1['rIYYA'])) {
                            if (_0x161bd1['btvVD'](res['success'], !![])) {
                                if (_0x161bd1['bFSfR'](_0x161bd1['lPXdB'], _0x161bd1['XOQNI'])) {
                                    console['log'](res['message']);
                                    if (res['result'] && res['result']['giftInfo']) {
                                        for (let _0x2a60c1 of res['result']['giftInfo']['giftList']) {
                                            console['log']('入会获得:' + _0x2a60c1['discountString'] + _0x2a60c1['prizeName'] + _0x2a60c1['secondLineDesc']);
                                        }
                                    }
                                } else {
                                    $['done']();
                                    return;
                                }
                            } else if (_0x161bd1['JJuYP'](typeof res, _0x161bd1['FZjwI']) && res['message']) {
                                if (_0x161bd1['btvVD'](_0x161bd1['WTdUd'], _0x161bd1['WTdUd'])) {
                                    console['log']('' + (res['message'] || ''));
                                } else {
                                    $['logErr'](e, _0x1867af);
                                }
                            } else {
                                console['log'](_0x14e8d6);
                            }
                        } else {
                            if (_0x161bd1['jsbfG'](typeof str, _0x161bd1['EGMjJ'])) {
                                try {
                                    return JSON['parse'](str);
                                } catch (_0x229e00) {
                                    console['log'](_0x229e00);
                                    $['msg']($['name'], '', _0x161bd1['wWBop']);
                                    return [];
                                }
                            }
                        }
                    } else {
                        console['log'](_0x14e8d6);
                    }
                } else {
                    console['log'](_0x513260['XdsZS']);
                    return;
                }
            } catch (_0x2153ae) {
                $['logErr'](_0x2153ae, _0x1867af);
            } finally {
                if (_0x161bd1['btvVD'](_0x161bd1['CgROM'], _0x161bd1['CgROM'])) {
                    _0x161bd1['KOxba'](_0x133b02);
                } else {
                    console['log'](_0x14e8d6);
                }
            }
        });
    });
}

function ruhui(_0x4eb16c) {
    var _0x4253ce = {
        'vfmPu': 'text/plain; Charset=UTF-8',
        'PfLDJ': 'https://api.m.jd.com',
        'EmKUb': 'api.m.jd.com',
        'cfTig': '*/*',
        'LHrfC': 'application/x-www-form-urlencoded'
    };
    let _0x10ff0a = '';
    if ($['shopactivityId']) _0x10ff0a = ',"activityId":' + $['shopactivityId'];
    return {
        'url': 'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body={"venderId":"' + _0x4eb16c + '","shopId":"' + _0x4eb16c + '","bindByVerifyCodeFlag":1,"registerExtend":{},"writeChildFlag":0' + _0x10ff0a + ',"channel":401}&client=H5&clientVersion=9.2.0&uuid=88888',
        'headers': {
            'Content-Type': _0x4253ce['vfmPu'],
            'Origin': _0x4253ce['PfLDJ'],
            'Host': _0x4253ce['EmKUb'],
            'accept': _0x4253ce['cfTig'],
            'User-Agent': $['UA'],
            'content-type': _0x4253ce['LHrfC'],
            'Referer': 'https://shopmember.m.jd.com/shopcard/?venderId=' + _0x4eb16c + '&shopId=' + _0x4eb16c + '&venderType=5&channel=401&returnUrl=https://cjhydz-isv.isvjcloud.com/microDz/invite/activity/wx/view/index/5802011?activityId=' + $['activityId'] + '&shareUuid=' + $['shareUuid'],
            'Cookie': cookie
        }
    };
}

function getOpenCardAllStatuesNew(_0xe69182 = 0x0) {
    var _0x544f17 = {
        'nQwLA': function(_0x27dcc8, _0x1e7937) {
            return _0x27dcc8 > _0x1e7937;
        },
        'yLsnB': function(_0xf04fae, _0x33bf1f) {
            return _0xf04fae(_0x33bf1f);
        },
        'nouwW': function(_0x2aa760, _0x4d9d5b) {
            return _0x2aa760 === _0x4d9d5b;
        },
        'dmyQi': 'sEyOb',
        'JYQXC': 'Bhtwa',
        'wABUR': 'hUEYu',
        'xggqy': 'UAlSv',
        'THlnW': function(_0xe8fd1a, _0x1b147b) {
            return _0xe8fd1a == _0x1b147b;
        },
        'kFoFL': 'object',
        'FKLop': function(_0x3e6791, _0x34e156) {
            return _0x3e6791 == _0x34e156;
        },
        'anMTp': function(_0x60e75a, _0x5a88c0) {
            return _0x60e75a < _0x5a88c0;
        },
        'XCxLR': function(_0x4efe55, _0x4f7c09) {
            return _0x4efe55 == _0x4f7c09;
        },
        'KqINM': function(_0x289f8f, _0x1f3172) {
            return _0x289f8f !== _0x1f3172;
        },
        'uygQw': 'wwXDp',
        'FBPpc': 'ZEtsg',
        'Ajbpl': function(_0x3b81be) {
            return _0x3b81be();
        },
        'dBYEo': function(_0x12708a, _0x2dd012) {
            return _0x12708a(_0x2dd012);
        },
        'BjAeE': 'headers',
        'YcwKr': 'set-cookie',
        'UBamh': 'Set-Cookie',
        'dQIGK': function(_0x207c21, _0x1e96a9) {
            return _0x207c21 === _0x1e96a9;
        },
        'GEaHc': 'eAcXT',
        'kdMYd': function(_0x12e486, _0x4bcc52) {
            return _0x12e486(_0x4bcc52);
        },
        'WLbaj': function(_0x195bd4, _0x2b0b6c, _0x33ded1) {
            return _0x195bd4(_0x2b0b6c, _0x33ded1);
        },
        'XQADt': '/microDz/invite/activity/wx/getOpenCardAllStatuesNew'
    };
    if (_0x544f17['nQwLA'](new Date()['getTime'](), 0x17c1daf4c00)) {
        $['done']();
        return;
    }
    return new Promise(_0x37bf53 => {
        var _0x2913d4 = {
            'NNQLR': function(_0x11f30e, _0x29d5de) {
                return _0x544f17['dBYEo'](_0x11f30e, _0x29d5de);
            },
            'uKElA': _0x544f17['BjAeE'],
            'nTZuv': _0x544f17['YcwKr'],
            'mmuKP': _0x544f17['UBamh']
        };
        if (_0x544f17['nQwLA'](new Date()['getTime'](), 0x17c1daf4c00)) {
            if (_0x544f17['dQIGK'](_0x544f17['GEaHc'], _0x544f17['GEaHc'])) {
                $['done']();
                return;
            } else {
                setcookie = setcookies['split'](',');
            }
        }
        body = 'activityId=' + $['activityId'] + '&pin=' + _0x544f17['dBYEo'](encodeURIComponent, _0x544f17['kdMYd'](encodeURIComponent, $['secretPin'])) + '&isInvited=0';
        $['post'](_0x544f17['WLbaj'](taskPostUrl, _0x544f17['XQADt'], body), async (_0x2deae6, _0x52213f, _0x185e56) => {
            var _0x864435 = {
                'unzom': function(_0x5eedfa, _0x30e85e) {
                    return _0x544f17['nQwLA'](_0x5eedfa, _0x30e85e);
                },
                'mNZJm': function(_0xe0148b, _0x5cec6a) {
                    return _0x544f17['yLsnB'](_0xe0148b, _0x5cec6a);
                }
            };
            if (_0x544f17['nouwW'](_0x544f17['dmyQi'], _0x544f17['JYQXC'])) {
                if (_0x864435['unzom'](new Date()['getTime'](), 0x17c1daf4c00)) {
                    $['done']();
                    return;
                }
                $['UA'] = 'jdapp;iPhone;10.1.0;14.3;' + _0x864435['mNZJm'](randomString, 0x28) + ';network/wifi;model/iPhone12,1;addressid/4199175193;appBuild/167774;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1';
            } else {
                try {
                    if (_0x2deae6) {
                        if (_0x544f17['nouwW'](_0x544f17['wABUR'], _0x544f17['xggqy'])) {
                            _0x2913d4['NNQLR'](setLzToken, _0x52213f[_0x2913d4['uKElA']][_0x2913d4['nTZuv']] || _0x52213f[_0x2913d4['uKElA']][_0x2913d4['mmuKP']] || '');
                        } else {
                            console['log']('' + JSON['stringify'](_0x2deae6));
                            console['log']($['name'] + ' getOpenCardAllStatuesNew API请求失败，请检查网路重试');
                        }
                    } else {
                        res = $['toObj'](_0x185e56);
                        if (_0x544f17['THlnW'](typeof res, _0x544f17['kFoFL']) && _0x544f17['nouwW'](res['result'], !![]) && _0x544f17['THlnW'](typeof res['data'], _0x544f17['kFoFL'])) {
                            if (_0x544f17['FKLop'](typeof res['data']['list'], _0x544f17['kFoFL'])) $['openCarList'] = res['data']['list'] || [];
                            if (res['data']['reward']) console['log']('获得' + res['data']['reward'] + '京豆');
                            if (_0x544f17['nouwW'](res['data']['list'], null) && _0x544f17['anMTp'](_0xe69182, 0x4)) await _0x544f17['yLsnB'](getOpenCardAllStatuesNew, ++_0xe69182);
                        } else if (_0x544f17['XCxLR'](typeof res, _0x544f17['kFoFL']) && res['errorMessage']) {
                            if (_0x544f17['KqINM'](_0x544f17['uygQw'], _0x544f17['uygQw'])) {
                                return JSON['parse'](str);
                            } else {
                                console['log']('getOpenCardAllStatuesNew ' + (res['errorMessage'] || ''));
                            }
                        } else {
                            if (_0x544f17['KqINM'](_0x544f17['FBPpc'], _0x544f17['FBPpc'])) {
                                console['log']('' + JSON['stringify'](_0x2deae6));
                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                            } else {
                                console['log'](_0x185e56);
                            }
                        }
                    }
                } catch (_0x3bbe7a) {
                    $['logErr'](_0x3bbe7a, _0x52213f);
                } finally {
                    _0x544f17['Ajbpl'](_0x37bf53);
                }
            }
        });
    });
}

function getActivityInfo(_0x5b4ff0 = 0x1) {
    var _0x45bd6f = {
        'FojKC': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie',
        'RwjEo': function(_0x84b4be, _0x6669d) {
            return _0x84b4be === _0x6669d;
        },
        'fwFwQ': 'false',
        'fWsOX': 'NcITD',
        'rPnOV': function(_0x45a864, _0x56d690) {
            return _0x45a864 !== _0x56d690;
        },
        'ETNaq': 'FCOGw',
        'tWLTs': 'VXdqL',
        'EmPEk': function(_0x5ad654, _0x1e52e4) {
            return _0x5ad654(_0x1e52e4);
        },
        'KwhGh': 'headers',
        'NwuVu': 'set-cookie',
        'FDuXG': 'Set-Cookie',
        'iZQAV': function(_0x58f944, _0x5d43f5) {
            return _0x58f944 == _0x5d43f5;
        },
        'mzWOU': 'object',
        'cBflm': function(_0x52c083, _0x57230d) {
            return _0x52c083 === _0x57230d;
        },
        'cIyVW': function(_0x51d762, _0x3e8dd5) {
            return _0x51d762 == _0x3e8dd5;
        },
        'CicjP': function(_0x37c53d, _0x5a7ed1) {
            return _0x37c53d > _0x5a7ed1;
        },
        'iHLdC': 'ienAB',
        'ZSTGu': 'FIbJK',
        'sdlYB': function(_0x59b49d) {
            return _0x59b49d();
        },
        'QPTKP': function(_0x2e50b9, _0x4bc865, _0x4befd7) {
            return _0x2e50b9(_0x4bc865, _0x4befd7);
        },
        'qgIGd': '/microDz/invite/activity/wx/getActivityInfo',
        'UuwEW': function(_0x3a98dd, _0xe34050) {
            return _0x3a98dd > _0xe34050;
        },
        'FKFaL': 'Xnzhs',
        'XOnJh': 'YbOOc'
    };
    if (_0x45bd6f['UuwEW'](new Date()['getTime'](), 0x17c1daf4c00)) {
        if (_0x45bd6f['rPnOV'](_0x45bd6f['FKFaL'], _0x45bd6f['XOnJh'])) {
            $['done']();
            return;
        } else {
            console['log'](data);
        }
    }
    return new Promise(_0x9fdd06 => {
        var _0x94144d = {
            'lPmFP': _0x45bd6f['FojKC'],
            'mKNyj': function(_0x3d3124, _0x255f42) {
                return _0x45bd6f['RwjEo'](_0x3d3124, _0x255f42);
            },
            'qtXGQ': _0x45bd6f['fwFwQ'],
            'OcxVo': function(_0x360750, _0x4e3ff7) {
                return _0x45bd6f['RwjEo'](_0x360750, _0x4e3ff7);
            },
            'lpZiq': _0x45bd6f['fWsOX'],
            'wiwoO': function(_0x6e2de, _0x505645) {
                return _0x45bd6f['rPnOV'](_0x6e2de, _0x505645);
            },
            'sBugI': _0x45bd6f['ETNaq'],
            'zIzwr': _0x45bd6f['tWLTs'],
            'itibk': function(_0x5f41ff, _0x36b39d) {
                return _0x45bd6f['EmPEk'](_0x5f41ff, _0x36b39d);
            },
            'zuimv': _0x45bd6f['KwhGh'],
            'CDABL': _0x45bd6f['NwuVu'],
            'ueJqA': _0x45bd6f['FDuXG'],
            'EFqGC': function(_0x580430, _0x433396) {
                return _0x45bd6f['iZQAV'](_0x580430, _0x433396);
            },
            'JDQKF': _0x45bd6f['mzWOU'],
            'KWegH': function(_0x3e62bb, _0x4c56f1) {
                return _0x45bd6f['cBflm'](_0x3e62bb, _0x4c56f1);
            },
            'ePpRN': function(_0x341b2e, _0x3763b9) {
                return _0x45bd6f['cIyVW'](_0x341b2e, _0x3763b9);
            },
            'Dguax': function(_0x1450f9, _0x4857f2) {
                return _0x45bd6f['CicjP'](_0x1450f9, _0x4857f2);
            },
            'WPiEv': function(_0xebcb01, _0x3c5830) {
                return _0x45bd6f['cBflm'](_0xebcb01, _0x3c5830);
            },
            'XdWLp': _0x45bd6f['iHLdC'],
            'sFLnO': _0x45bd6f['ZSTGu'],
            'OMpfD': function(_0xcb4e0c) {
                return _0x45bd6f['sdlYB'](_0xcb4e0c);
            }
        };
        body = 'activityId=' + $['activityId'];
        $['post'](_0x45bd6f['QPTKP'](taskPostUrl, _0x45bd6f['qgIGd'], body), async (_0x1fb19b, _0x298772, _0x55fc52) => {
            var _0x4f6160 = {
                'AEPcD': function(_0x5b875c, _0x1cf25f) {
                    return _0x94144d['mKNyj'](_0x5b875c, _0x1cf25f);
                },
                'VeaMI': _0x94144d['qtXGQ']
            };
            try {
                if (_0x94144d['OcxVo'](_0x94144d['lpZiq'], _0x94144d['lpZiq'])) {
                    if (_0x1fb19b) {
                        console['log']('' + JSON['stringify'](_0x1fb19b));
                        console['log']($['name'] + ' getActivityInfo API请求失败，请检查网路重试');
                    } else {
                        if (_0x94144d['wiwoO'](_0x94144d['sBugI'], _0x94144d['zIzwr'])) {
                            _0x94144d['itibk'](setLzToken, _0x298772[_0x94144d['zuimv']][_0x94144d['CDABL']] || _0x298772[_0x94144d['zuimv']][_0x94144d['ueJqA']] || '');
                            res = $['toObj'](_0x55fc52);
                            if (_0x94144d['EFqGC'](typeof res, _0x94144d['JDQKF']) && _0x94144d['KWegH'](res['result'], !![]) && _0x94144d['EFqGC'](typeof res['data'], _0x94144d['JDQKF'])) {
                                if (_0x94144d['ePpRN'](_0x5b4ff0, 0x1)) console['log']('京豆剩余' + res['data']['residualPercentage'] + '%');
                                $['residualPercentage'] = res['data']['residualPercentage'];
                            } else if (_0x94144d['ePpRN'](typeof res, _0x94144d['JDQKF']) && res['errorMessage']) {
                                console['log']('getActivityInfo ' + (res['errorMessage'] || ''));
                            } else {
                                console['log'](_0x55fc52);
                            }
                        } else {
                            try {
                                return JSON['parse'](str);
                            } catch (_0x442576) {
                                console['log'](_0x442576);
                                $['msg']($['name'], '', _0x94144d['lPmFP']);
                                return [];
                            }
                        }
                    }
                    if (_0x94144d['Dguax'](new Date()['getTime'](), 0x17c1daf4c00)) {
                        $['done']();
                        return;
                    }
                } else {
                    Object['keys'](jdCookieNode)['forEach'](_0x4f3bfa => {
                        cookiesArr['push'](jdCookieNode[_0x4f3bfa]);
                    });
                    if (process['env']['JD_DEBUG'] && _0x4f6160['AEPcD'](process['env']['JD_DEBUG'], _0x4f6160['VeaMI'])) console['log'] = () => {};
                }
            } catch (_0x1ce80b) {
                if (_0x94144d['WPiEv'](_0x94144d['XdWLp'], _0x94144d['XdWLp'])) {
                    $['logErr'](_0x1ce80b, _0x298772);
                } else {
                    $['done']();
                    return;
                }
            } finally {
                if (_0x94144d['wiwoO'](_0x94144d['sFLnO'], _0x94144d['sFLnO'])) {
                    console['log'](_0x55fc52);
                } else {
                    _0x94144d['OMpfD'](_0x9fdd06);
                }
            }
        });
    });
}

function inviteRecord(_0x2990dd) {
    var _0x371103 = {
        'JVkbu': function(_0x106dc0) {
            return _0x106dc0();
        },
        'CSeUt': function(_0x5b3b4d, _0xc67f08) {
            return _0x5b3b4d === _0xc67f08;
        },
        'GWTxe': 'bUSEH',
        'bwvpx': 'RFlhv',
        'IvWAx': function(_0x119893, _0x10d71e) {
            return _0x119893 !== _0x10d71e;
        },
        'Zfvlz': 'HyvYO',
        'VzhWj': 'MDsdu',
        'BCSMh': 'BtdDT',
        'JlgNt': 'bQSFv',
        'gLKQW': function(_0x4ecedb, _0x5a65f8) {
            return _0x4ecedb > _0x5a65f8;
        },
        'pxWra': function(_0x20a149, _0x28a9d8) {
            return _0x20a149 === _0x28a9d8;
        },
        'GbzGI': 'YFtFW',
        'zSYjG': 'swmCj',
        'MFwoV': function(_0x5f1e44, _0x22412f) {
            return _0x5f1e44 == _0x22412f;
        },
        'BnIQF': 'object',
        'wAFaK': function(_0x1d7aba, _0x3bf8f6) {
            return _0x1d7aba == _0x3bf8f6;
        },
        'dQBQn': function(_0x21d641, _0x5d681f) {
            return _0x21d641 == _0x5d681f;
        },
        'MvhhS': '在当前队伍中',
        'paKHb': function(_0x1eb91f, _0x157ce6) {
            return _0x1eb91f == _0x157ce6;
        },
        'KFdGv': function(_0x9e00d, _0x384779) {
            return _0x9e00d > _0x384779;
        },
        'dxgvQ': function(_0x5f0528, _0x1ce66d) {
            return _0x5f0528 !== _0x1ce66d;
        },
        'UXTWp': 'zlVqZ',
        'ZFhxo': 'aVGJL',
        'HvLlu': function(_0x12b0d6, _0x3ee860) {
            return _0x12b0d6 !== _0x3ee860;
        },
        'vuCBU': 'LITYn',
        'OlcIR': function(_0xb0df70, _0x5d03a2) {
            return _0xb0df70(_0x5d03a2);
        },
        'TdjmD': 'headers',
        'KnvUw': 'set-cookie',
        'ZZUGy': 'Set-Cookie',
        'sQpXO': function(_0x42d674, _0x452888) {
            return _0x42d674 > _0x452888;
        },
        'dXmtn': function(_0x4eef8c, _0x4d81cf) {
            return _0x4eef8c(_0x4d81cf);
        },
        'pTerV': function(_0x36ddd0, _0x4f46d3) {
            return _0x36ddd0 === _0x4f46d3;
        },
        'fPIWt': function(_0x497ad7, _0x4ac619) {
            return _0x497ad7 != _0x4ac619;
        },
        'tPCOO': 'undefined',
        'jqIQY': function(_0x570206, _0x161cbf) {
            return _0x570206 == _0x161cbf;
        },
        'ybQko': function(_0x40b113, _0x2d9cbc) {
            return _0x40b113 !== _0x2d9cbc;
        },
        'TtjNY': 'qfVmK',
        'XumBf': 'IZRuR',
        'bATKL': 'fBKis',
        'BtASI': 'IKiRf',
        'ymqWw': function(_0x272d0f, _0x28e953) {
            return _0x272d0f(_0x28e953);
        },
        'YuYCd': function(_0x36d666, _0x14feaa, _0x1ae9d9) {
            return _0x36d666(_0x14feaa, _0x1ae9d9);
        },
        'IDlrR': '/microDz/invite/activity/wx/inviteRecord',
        'NFIBb': function(_0x4fc9e7, _0x111630) {
            return _0x4fc9e7 > _0x111630;
        }
    };
    if (_0x371103['NFIBb'](new Date()['getTime'](), 0x17c1daf4c00)) {
        $['done']();
        return;
    }
    return new Promise(_0x526ca2 => {
        var _0x2afcd9 = {
            'uTSya': function(_0x3f8226, _0x3ade40) {
                return _0x371103['OlcIR'](_0x3f8226, _0x3ade40);
            },
            'EAKiR': _0x371103['TdjmD'],
            'gcuSn': _0x371103['KnvUw'],
            'NqPtD': _0x371103['ZZUGy'],
            'ZVdlJ': function(_0x56c5d4, _0x328830) {
                return _0x371103['sQpXO'](_0x56c5d4, _0x328830);
            },
            'Jazth': function(_0x529035, _0x4fe123) {
                return _0x371103['dXmtn'](_0x529035, _0x4fe123);
            },
            'pdtzA': function(_0x258b2c, _0x2d0d83) {
                return _0x371103['paKHb'](_0x258b2c, _0x2d0d83);
            },
            'krTKD': _0x371103['BnIQF'],
            'LRxtC': function(_0x3f656d, _0x36a74b) {
                return _0x371103['pTerV'](_0x3f656d, _0x36a74b);
            },
            'KMQxX': function(_0x40d33b, _0x29fe87) {
                return _0x371103['fPIWt'](_0x40d33b, _0x29fe87);
            },
            'vVNDm': _0x371103['tPCOO'],
            'bvXlb': function(_0x3514ad, _0x11873f) {
                return _0x371103['fPIWt'](_0x3514ad, _0x11873f);
            },
            'yNFJY': function(_0x55714d, _0x17764a) {
                return _0x371103['fPIWt'](_0x55714d, _0x17764a);
            },
            'dojOh': function(_0x222872, _0xcc9e82) {
                return _0x371103['jqIQY'](_0x222872, _0xcc9e82);
            }
        };
        if (_0x371103['ybQko'](_0x371103['TtjNY'], _0x371103['XumBf'])) {
            if (_0x371103['sQpXO'](new Date()['getTime'](), 0x17c1daf4c00)) {
                if (_0x371103['pTerV'](_0x371103['bATKL'], _0x371103['BtASI'])) {
                    console['log']('' + JSON['stringify'](err));
                    console['log']($['name'] + ' inviteRecord API请求失败，请检查网路重试');
                } else {
                    $['done']();
                    return;
                }
            }
            body = 'activityId=' + $['activityId'] + '&inviter=' + _0x371103['dXmtn'](encodeURIComponent, _0x371103['ymqWw'](encodeURIComponent, _0x2990dd)) + '&pageNo=1&pageSize=15&type=0';
            $['post'](_0x371103['YuYCd'](taskPostUrl, _0x371103['IDlrR'], body), async (_0x59e771, _0x42de67, _0x2b4c89) => {
                var _0x5368c8 = {
                    'liiuh': function(_0x14a851) {
                        return _0x371103['JVkbu'](_0x14a851);
                    }
                };
                if (_0x371103['CSeUt'](_0x371103['GWTxe'], _0x371103['bwvpx'])) {
                    _0x5368c8['liiuh'](_0x526ca2);
                } else {
                    try {
                        if (_0x371103['IvWAx'](_0x371103['Zfvlz'], _0x371103['VzhWj'])) {
                            if (_0x59e771) {
                                if (_0x371103['CSeUt'](_0x371103['BCSMh'], _0x371103['JlgNt'])) {
                                    _0x2afcd9['uTSya'](setLzToken, _0x42de67[_0x2afcd9['EAKiR']][_0x2afcd9['gcuSn']] || _0x42de67[_0x2afcd9['EAKiR']][_0x2afcd9['NqPtD']] || '');
                                    if (_0x2afcd9['ZVdlJ'](new Date()['getTime'](), 0x17c1daf4c00)) {
                                        $['done']();
                                        return;
                                    }
                                } else {
                                    console['log']('' + JSON['stringify'](_0x59e771));
                                    console['log']($['name'] + ' inviteRecord API请求失败，请检查网路重试');
                                }
                            } else {
                                if (_0x371103['gLKQW'](new Date()['getTime'](), 0x17c1daf4c00)) {
                                    if (_0x371103['pxWra'](_0x371103['GbzGI'], _0x371103['zSYjG'])) {
                                        $['logErr'](e, _0x42de67);
                                    } else {
                                        $['done']();
                                        return;
                                    }
                                }
                                res = $['toObj'](_0x2b4c89);
                                if (_0x371103['MFwoV'](typeof res, _0x371103['BnIQF']) && _0x371103['pxWra'](res['result'], !![]) && _0x371103['wAFaK'](typeof res['data'], _0x371103['BnIQF'])) {
                                    if (_0x371103['dQBQn'](res['data']['inviterNick'], $['inviterNick'])) {
                                        $['inJoinTeam'] = !![];
                                        console['log'](_0x371103['MvhhS']);
                                    } else {
                                        console['log']('已加入其他队伍: ' + res['data']['inviterNick']);
                                    }
                                } else if (_0x371103['paKHb'](typeof res, _0x371103['BnIQF']) && res['errorMessage']) {
                                    console['log']('inviteRecord ' + (res['errorMessage'] || ''));
                                } else {
                                    console['log'](_0x2b4c89);
                                }
                                if (_0x371103['KFdGv'](new Date()['getTime'](), 0x17c1daf4c00)) {
                                    if (_0x371103['dxgvQ'](_0x371103['UXTWp'], _0x371103['ZFhxo'])) {
                                        $['done']();
                                        return;
                                    } else {
                                        $['done']();
                                        return;
                                    }
                                }
                            }
                        } else {
                            $['done']();
                            return;
                        }
                    } catch (_0x37f365) {
                        $['logErr'](_0x37f365, _0x42de67);
                    } finally {
                        if (_0x371103['HvLlu'](_0x371103['vuCBU'], _0x371103['vuCBU'])) {
                            console['log'](res['message']);
                        } else {
                            _0x371103['JVkbu'](_0x526ca2);
                        }
                    }
                }
            });
        } else {
            _0x2afcd9['Jazth'](setLzToken, resp[_0x2afcd9['EAKiR']][_0x2afcd9['gcuSn']] || resp[_0x2afcd9['EAKiR']][_0x2afcd9['NqPtD']] || '');
            res = $['toObj'](data);
            if (_0x2afcd9['pdtzA'](typeof res, _0x2afcd9['krTKD']) && _0x2afcd9['LRxtC'](res['result'], !![])) {
                if (res['data'] && _0x2afcd9['KMQxX'](typeof res['data']['yunMidImageUrl'], _0x2afcd9['vVNDm'])) $['attrTouXiang'] = res['data']['yunMidImageUrl'] || $['attrTouXiang'];
                if (res['data'] && _0x2afcd9['bvXlb'](typeof res['data']['secretPin'], _0x2afcd9['vVNDm'])) $['secretPin'] = res['data']['secretPin'];
                if (res['data'] && _0x2afcd9['yNFJY'](typeof res['data']['nickname'], _0x2afcd9['vVNDm'])) $['inviteeNick'] = res['data']['nickname'];
            } else if (_0x2afcd9['dojOh'](typeof res, _0x2afcd9['krTKD']) && res['errorMessage']) {
                console['log']('getMyPing ' + (res['errorMessage'] || ''));
            } else {
                console['log'](data);
            }
        }
    });
}

function acceptInvite(_0x2e5515 = 0x0) {
    var _0x3f3b3b = {
        'YEPKq': function(_0x204794, _0x19fd41) {
            return _0x204794 > _0x19fd41;
        },
        'anKeG': function(_0xb9be90, _0x1885d6) {
            return _0xb9be90 == _0x1885d6;
        },
        'KjjLC': 'object',
        'pgCQT': function(_0x142f3d, _0x2d86fb) {
            return _0x142f3d === _0x2d86fb;
        },
        'vDBgp': function(_0x5da7f3, _0x167eed) {
            return _0x5da7f3 === _0x167eed;
        },
        'ZUNBm': '成功加入队伍',
        'blmGA': function(_0x2872e5, _0x5bd369) {
            return _0x2872e5(_0x5bd369);
        },
        'biOBE': 'CaqXf',
        'WMTsg': '奖品与您擦肩而过',
        'TFWvk': 'cZDwQ',
        'QqrAs': 'TCQoW',
        'mzISx': 'opIrI',
        'CvOcO': function(_0x551961) {
            return _0x551961();
        },
        'PGIEn': function(_0x5ddde0, _0x1cd236) {
            return _0x5ddde0 > _0x1cd236;
        },
        'hOEcP': function(_0x546529, _0xf5d887) {
            return _0x546529 !== _0xf5d887;
        },
        'BGqeW': 'wMNth',
        'dYnKB': 'UBAEB',
        'xxcDy': function(_0x4b97f3, _0x39ac7f) {
            return _0x4b97f3(_0x39ac7f);
        },
        'riyDZ': function(_0xf5b93b, _0x8b8a8f) {
            return _0xf5b93b(_0x8b8a8f);
        },
        'dHfnG': function(_0x42dddc, _0x5287ef, _0x5ea99f) {
            return _0x42dddc(_0x5287ef, _0x5ea99f);
        },
        'HaaND': '/microDz/invite/activity/wx/acceptInvite',
        'lhGZF': function(_0x56dbb0, _0x931336) {
            return _0x56dbb0 > _0x931336;
        }
    };
    if (_0x3f3b3b['lhGZF'](new Date()['getTime'](), 0x17c1daf4c00)) {
        $['done']();
        return;
    }
    return new Promise(_0x43e3bc => {
        var _0x5e9f7d = {
            'YHluA': function(_0x22a97b, _0x40c598) {
                return _0x3f3b3b['YEPKq'](_0x22a97b, _0x40c598);
            },
            'wyQSX': function(_0x5c23bc, _0x15ed7d) {
                return _0x3f3b3b['anKeG'](_0x5c23bc, _0x15ed7d);
            },
            'PKmkC': _0x3f3b3b['KjjLC'],
            'zGPmH': function(_0x578d36, _0x5e40f1) {
                return _0x3f3b3b['pgCQT'](_0x578d36, _0x5e40f1);
            },
            'gTtLn': function(_0x28c360, _0x3bbb07) {
                return _0x3f3b3b['vDBgp'](_0x28c360, _0x3bbb07);
            },
            'XJCDV': _0x3f3b3b['ZUNBm'],
            'qlWxy': function(_0x269f8b, _0x331926) {
                return _0x3f3b3b['blmGA'](_0x269f8b, _0x331926);
            },
            'jbKrh': _0x3f3b3b['biOBE'],
            'QnEFv': _0x3f3b3b['WMTsg'],
            'zdNzF': function(_0x51dd46, _0x522110) {
                return _0x3f3b3b['YEPKq'](_0x51dd46, _0x522110);
            },
            'raKHf': _0x3f3b3b['TFWvk'],
            'DKSUI': _0x3f3b3b['QqrAs'],
            'BzCNh': _0x3f3b3b['mzISx'],
            'fGOCT': function(_0x32cd30) {
                return _0x3f3b3b['CvOcO'](_0x32cd30);
            }
        };
        if (_0x3f3b3b['PGIEn'](new Date()['getTime'](), 0x17c1daf4c00)) {
            if (_0x3f3b3b['hOEcP'](_0x3f3b3b['BGqeW'], _0x3f3b3b['dYnKB'])) {
                $['done']();
                return;
            } else {
                console['log'](data);
            }
        }
        let _0x1a0861 = _0x3f3b3b['blmGA'](encodeURIComponent, _0x3f3b3b['blmGA'](encodeURIComponent, $['inviter']));
        let _0x8d9c3c = _0x3f3b3b['xxcDy'](encodeURIComponent, _0x3f3b3b['xxcDy'](encodeURIComponent, $['secretPin']));
        body = 'activityId=' + $['activityId'] + '&inviter=' + _0x1a0861 + '&inviterImg=' + _0x3f3b3b['riyDZ'](encodeURIComponent, $['inviterImg']) + '&inviterNick=' + _0x3f3b3b['riyDZ'](encodeURIComponent, $['inviterNick']) + '&invitee=' + _0x8d9c3c + '&inviteeImg=' + _0x3f3b3b['riyDZ'](encodeURIComponent, $['attrTouXiang']) + '&inviteeNick=' + _0x3f3b3b['riyDZ'](encodeURIComponent, $['inviteeNick']);
        $['post'](_0x3f3b3b['dHfnG'](taskPostUrl, _0x3f3b3b['HaaND'], body), async (_0x13ce62, _0x1c6c11, _0x28f2a1) => {
            try {
                if (_0x13ce62) {
                    console['log']('' + JSON['stringify'](_0x13ce62));
                    console['log']($['name'] + ' acceptInvite API请求失败，请检查网路重试');
                } else {
                    if (_0x5e9f7d['YHluA'](new Date()['getTime'](), 0x17c1daf4c00)) {
                        $['done']();
                        return;
                    }
                    res = $['toObj'](_0x28f2a1);
                    if (_0x5e9f7d['wyQSX'](typeof res, _0x5e9f7d['PKmkC']) && _0x5e9f7d['zGPmH'](res['result'], !![]) && _0x5e9f7d['gTtLn'](res['data'], !![])) {
                        console['log'](_0x5e9f7d['XJCDV']);
                        await _0x5e9f7d['qlWxy'](inviteRecord, $['inviter']);
                    } else if (_0x5e9f7d['wyQSX'](typeof res, _0x5e9f7d['PKmkC']) && res['errorMessage']) {
                        if (_0x5e9f7d['gTtLn'](_0x5e9f7d['jbKrh'], _0x5e9f7d['jbKrh'])) {
                            console['log']('acceptInvite ' + (res['errorMessage'] || ''));
                            if (_0x5e9f7d['wyQSX'](_0x2e5515, 0x0) && _0x5e9f7d['YHluA'](res['errorMessage']['indexOf'](_0x5e9f7d['QnEFv']), -0x1)) {} else {}
                        } else {
                            $['done']();
                            return;
                        }
                    } else {
                        console['log'](_0x28f2a1);
                    }
                    if (_0x5e9f7d['zdNzF'](new Date()['getTime'](), 0x17c1daf4c00)) {
                        $['done']();
                        return;
                    }
                }
            } catch (_0xb6b9ba) {
                if (_0x5e9f7d['gTtLn'](_0x5e9f7d['raKHf'], _0x5e9f7d['DKSUI'])) {
                    $['logErr'](_0xb6b9ba, _0x1c6c11);
                } else {
                    $['logErr'](_0xb6b9ba, _0x1c6c11);
                }
            } finally {
                if (_0x5e9f7d['gTtLn'](_0x5e9f7d['BzCNh'], _0x5e9f7d['BzCNh'])) {
                    _0x5e9f7d['fGOCT'](_0x43e3bc);
                } else {
                    console['log']('' + JSON['stringify'](_0x13ce62));
                    console['log']($['name'] + ' accesslog API请求失败，请检查网路重试');
                }
            }
        });
    });
}

function isInvited() {
    var _0x2e04d9 = {
        'MBpSd': function(_0x2f6ad2, _0x1c27bb) {
            return _0x2f6ad2 > _0x1c27bb;
        },
        'ukWVD': 'lz_jdpin_token=',
        'uEqmL': function(_0x34dd2f, _0x120a5b) {
            return _0x34dd2f + _0x120a5b;
        },
        'KQBJU': function(_0x3b7c03, _0x264ae0) {
            return _0x3b7c03 > _0x264ae0;
        },
        'UnMWT': 'LZ_TOKEN_KEY=',
        'gmSIs': function(_0x231296, _0x49a73d) {
            return _0x231296 > _0x49a73d;
        },
        'JZFAV': 'LZ_TOKEN_VALUE=',
        'MtceA': function(_0x2a4e5e, _0x34886b) {
            return _0x2a4e5e + _0x34886b;
        },
        'kDRIy': function(_0x448b62, _0x3239c9) {
            return _0x448b62 !== _0x3239c9;
        },
        'duQKO': 'drnFe',
        'nvKcL': function(_0x3a283a, _0x1be4e7) {
            return _0x3a283a > _0x1be4e7;
        },
        'gqMCu': function(_0x1865fa, _0x3b8764) {
            return _0x1865fa !== _0x3b8764;
        },
        'ZNpVs': 'gSdXW',
        'rNVpi': 'wveCN',
        'dDkaR': function(_0x4233b2, _0x22983b) {
            return _0x4233b2 === _0x22983b;
        },
        'cBOdC': 'SArai',
        'Fgcnv': 'jUgoF',
        'HYruu': function(_0x2c4cef, _0x4351c7) {
            return _0x2c4cef(_0x4351c7);
        },
        'LBtps': 'headers',
        'mxnAh': 'set-cookie',
        'xOsUT': 'Set-Cookie',
        'afPIH': function(_0x5347b8, _0x5773fd) {
            return _0x5347b8 == _0x5773fd;
        },
        'SlNRA': 'object',
        'RcwWv': function(_0x489079, _0x3d742a) {
            return _0x489079 != _0x3d742a;
        },
        'lKJKT': 'undefined',
        'zvSWH': function(_0x5d5038, _0x115791) {
            return _0x5d5038 !== _0x115791;
        },
        'pCgRT': 'bIYEA',
        'AlCCv': 'NuCDd',
        'lUXGb': function(_0x3e2bc2, _0x3bb85e) {
            return _0x3e2bc2(_0x3bb85e);
        },
        'AqIiJ': 'DiTPX',
        'UdmgY': 'xVbEo',
        'slFLi': function(_0x3d6e5c, _0x55bf2f) {
            return _0x3d6e5c == _0x55bf2f;
        },
        'SxdiT': 'nNeTJ',
        'xnLPt': 'ySORO',
        'grIPV': 'khryr',
        'swrgm': 'hyErI',
        'zMGAG': 'fidVD',
        'KznUf': function(_0x5a5e4f) {
            return _0x5a5e4f();
        },
        'WXFUh': function(_0x4d07a7, _0x1e760b) {
            return _0x4d07a7 === _0x1e760b;
        },
        'mggMu': 'lbKaL',
        'bVKcZ': 'Xoazy',
        'KFuAv': function(_0x2e871a, _0x524964) {
            return _0x2e871a > _0x524964;
        },
        'sysel': function(_0x251f0c, _0x3b1d7e) {
            return _0x251f0c(_0x3b1d7e);
        },
        'bVozy': function(_0x5b813e, _0x556655, _0x2b76a5) {
            return _0x5b813e(_0x556655, _0x2b76a5);
        },
        'yNJhO': '/microDz/invite/activity/wx/isInvited',
        'GEDpt': function(_0x18a8b2, _0x2cef3f) {
            return _0x18a8b2 > _0x2cef3f;
        }
    };
    if (_0x2e04d9['GEDpt'](new Date()['getTime'](), 0x17c1daf4c00)) {
        $['done']();
        return;
    }
    return new Promise(_0x472f54 => {
        var _0x2a8b93 = {
            'zkrXq': function(_0xb91db7, _0x351c0b) {
                return _0x2e04d9['kDRIy'](_0xb91db7, _0x351c0b);
            },
            'nhmyx': _0x2e04d9['duQKO'],
            'HLNTQ': function(_0x35bc1f, _0x128d96) {
                return _0x2e04d9['nvKcL'](_0x35bc1f, _0x128d96);
            },
            'TsCqT': function(_0x441781, _0x47d520) {
                return _0x2e04d9['gqMCu'](_0x441781, _0x47d520);
            },
            'WqftO': _0x2e04d9['ZNpVs'],
            'oCfCv': _0x2e04d9['rNVpi'],
            'FecvC': function(_0xdd70ef, _0x4768bb) {
                return _0x2e04d9['dDkaR'](_0xdd70ef, _0x4768bb);
            },
            'OyZQn': _0x2e04d9['cBOdC'],
            'rbvtG': _0x2e04d9['Fgcnv'],
            'tSPRm': function(_0x12d1b8, _0x1854fc) {
                return _0x2e04d9['HYruu'](_0x12d1b8, _0x1854fc);
            },
            'TRJAg': _0x2e04d9['LBtps'],
            'lsnJW': _0x2e04d9['mxnAh'],
            'yKdvH': _0x2e04d9['xOsUT'],
            'NvTrw': function(_0x44af2d, _0x35fe67) {
                return _0x2e04d9['afPIH'](_0x44af2d, _0x35fe67);
            },
            'kCtUU': _0x2e04d9['SlNRA'],
            'lIOkX': function(_0x163aed, _0x46ed7e) {
                return _0x2e04d9['RcwWv'](_0x163aed, _0x46ed7e);
            },
            'Qaxan': _0x2e04d9['lKJKT'],
            'chQSs': function(_0x29b754, _0x3c5fee) {
                return _0x2e04d9['zvSWH'](_0x29b754, _0x3c5fee);
            },
            'FTALX': _0x2e04d9['pCgRT'],
            'qRuIH': _0x2e04d9['AlCCv'],
            'OkEbn': function(_0x5c8bff, _0x9079be) {
                return _0x2e04d9['lUXGb'](_0x5c8bff, _0x9079be);
            },
            'xpZen': function(_0x11a76c, _0x2ed38f) {
                return _0x2e04d9['dDkaR'](_0x11a76c, _0x2ed38f);
            },
            'zayej': _0x2e04d9['AqIiJ'],
            'Rwaxm': _0x2e04d9['UdmgY'],
            'YIMWM': function(_0x148c50, _0x59a669) {
                return _0x2e04d9['slFLi'](_0x148c50, _0x59a669);
            },
            'LMhCb': _0x2e04d9['SxdiT'],
            'lvAgU': _0x2e04d9['xnLPt'],
            'hRZiw': function(_0x392b99, _0x73997d) {
                return _0x2e04d9['nvKcL'](_0x392b99, _0x73997d);
            },
            'dCWeJ': _0x2e04d9['grIPV'],
            'xNlaS': _0x2e04d9['swrgm'],
            'jTHth': _0x2e04d9['zMGAG'],
            'LAiqI': function(_0x3589ff) {
                return _0x2e04d9['KznUf'](_0x3589ff);
            }
        };
        if (_0x2e04d9['WXFUh'](_0x2e04d9['mggMu'], _0x2e04d9['bVKcZ'])) {
            if (_0x2e04d9['MBpSd'](name['indexOf'](_0x2e04d9['ukWVD']), -0x1)) lz_jdpin_token = _0x2e04d9['uEqmL'](name['replace'](/ /g, ''), ';');
            if (_0x2e04d9['KQBJU'](name['indexOf'](_0x2e04d9['UnMWT']), -0x1)) LZ_TOKEN_KEY = _0x2e04d9['uEqmL'](name['replace'](/ /g, ''), ';');
            if (_0x2e04d9['gmSIs'](name['indexOf'](_0x2e04d9['JZFAV']), -0x1)) LZ_TOKEN_VALUE = _0x2e04d9['MtceA'](name['replace'](/ /g, ''), ';');
        } else {
            if (_0x2e04d9['KFuAv'](new Date()['getTime'](), 0x17c1daf4c00)) {
                $['done']();
                return;
            }
            body = 'activityId=' + $['activityId'] + '&pin=' + _0x2e04d9['lUXGb'](encodeURIComponent, _0x2e04d9['sysel'](encodeURIComponent, $['secretPin']));
            $['post'](_0x2e04d9['bVozy'](taskPostUrl, _0x2e04d9['yNJhO'], body), async (_0xaba0cd, _0xcf0a27, _0x32ddd5) => {
                if (_0x2a8b93['zkrXq'](_0x2a8b93['nhmyx'], _0x2a8b93['nhmyx'])) {
                    $['logErr'](e, _0xcf0a27);
                } else {
                    try {
                        if (_0x2a8b93['HLNTQ'](new Date()['getTime'](), 0x17c1daf4c00)) {
                            $['done']();
                            return;
                        }
                        if (_0xaba0cd) {
                            if (_0x2a8b93['TsCqT'](_0x2a8b93['WqftO'], _0x2a8b93['oCfCv'])) {
                                console['log']('' + JSON['stringify'](_0xaba0cd));
                                console['log']($['name'] + ' isInvited API请求失败，请检查网路重试');
                            } else {
                                $['logErr'](e, _0xcf0a27);
                            }
                        } else {
                            if (_0x2a8b93['FecvC'](_0x2a8b93['OyZQn'], _0x2a8b93['rbvtG'])) {
                                console['log'](_0x32ddd5);
                            } else {
                                _0x2a8b93['tSPRm'](setLzToken, _0xcf0a27[_0x2a8b93['TRJAg']][_0x2a8b93['lsnJW']] || _0xcf0a27[_0x2a8b93['TRJAg']][_0x2a8b93['yKdvH']] || '');
                                res = $['toObj'](_0x32ddd5);
                                if (_0x2a8b93['NvTrw'](typeof res, _0x2a8b93['kCtUU']) && _0x2a8b93['FecvC'](res['result'], !![])) {
                                    if (res['data'] && _0x2a8b93['lIOkX'](typeof res['data']['isInvited'], _0x2a8b93['Qaxan'])) {
                                        if (_0x2a8b93['chQSs'](_0x2a8b93['FTALX'], _0x2a8b93['qRuIH'])) {
                                            if (!res['data']['isInvited']) {
                                                await _0x2a8b93['OkEbn'](acceptInvite, 0x0);
                                            } else {
                                                if (_0x2a8b93['xpZen'](_0x2a8b93['zayej'], _0x2a8b93['zayej'])) {
                                                    await _0x2a8b93['OkEbn'](inviteRecord, res['data']['inviter'] || $['inviter']);
                                                } else {
                                                    console['log'](_0x32ddd5);
                                                }
                                            }
                                            if (_0x2a8b93['NvTrw']($['index'], 0x1) && _0x2a8b93['HLNTQ'](cookiesArr['length'], 0x5)) {
                                                if (_0x2a8b93['xpZen'](_0x2a8b93['Rwaxm'], _0x2a8b93['Rwaxm'])) {
                                                    console['log']('更新助力码为[' + $['inviteeNick'] + ']');
                                                    $['inviter'] = $['secretPin'];
                                                    $['inviterImg'] = $['attrTouXiang'];
                                                    $['inviterNick'] = $['inviteeNick'];
                                                } else {
                                                    console['log']('' + JSON['stringify'](_0xaba0cd));
                                                    console['log']($['name'] + ' getMyPing API请求失败，请检查网路重试');
                                                }
                                            }
                                        } else {
                                            $['done']();
                                            return;
                                        }
                                    }
                                } else if (_0x2a8b93['YIMWM'](typeof res, _0x2a8b93['kCtUU']) && res['errorMessage']) {
                                    console['log']('isInvited ' + (res['errorMessage'] || ''));
                                } else {
                                    if (_0x2a8b93['chQSs'](_0x2a8b93['LMhCb'], _0x2a8b93['lvAgU'])) {
                                        console['log'](_0x32ddd5);
                                    } else {
                                        $['done']();
                                        return;
                                    }
                                }
                                if (_0x2a8b93['hRZiw'](new Date()['getTime'](), 0x17c1daf4c00)) {
                                    if (_0x2a8b93['xpZen'](_0x2a8b93['dCWeJ'], _0x2a8b93['dCWeJ'])) {
                                        $['done']();
                                        return;
                                    } else {
                                        $['done']();
                                        return;
                                    }
                                }
                            }
                        }
                    } catch (_0x5a3593) {
                        $['logErr'](_0x5a3593, _0xcf0a27);
                    } finally {
                        if (_0x2a8b93['xpZen'](_0x2a8b93['xNlaS'], _0x2a8b93['jTHth'])) {
                            console['log']('' + JSON['stringify'](_0xaba0cd));
                            console['log']($['name'] + ' acceptInvite API请求失败，请检查网路重试');
                        } else {
                            _0x2a8b93['LAiqI'](_0x472f54);
                        }
                    }
                }
            });
        }
    });
}

function accesslog1() {
    var _0x3f859c = {
        'uXNPN': function(_0x3c018e, _0x262bcf) {
            return _0x3c018e !== _0x262bcf;
        },
        'WvOLV': 'OEpnY',
        'efHqi': 'oKbIA',
        'VuVCp': function(_0x26d2be, _0x58557e) {
            return _0x26d2be(_0x58557e);
        },
        'LBfNy': 'headers',
        'cqbiO': 'set-cookie',
        'QKoHN': 'Set-Cookie',
        'Xbafm': function(_0x2bf83d) {
            return _0x2bf83d();
        },
        'mbaiy': 'bDxhd',
        'BByYE': function(_0x3b02ad, _0x293e02) {
            return _0x3b02ad(_0x293e02);
        },
        'bJiVn': function(_0x44f553, _0x2192eb) {
            return _0x44f553(_0x2192eb);
        },
        'lLTvW': function(_0x446219, _0x11cc91) {
            return _0x446219(_0x11cc91);
        },
        'TwZkF': function(_0x59eb62, _0x3dfd38, _0x49a01f) {
            return _0x59eb62(_0x3dfd38, _0x49a01f);
        },
        'YMrhw': '/common/accessLog'
    };
    return new Promise(_0x198986 => {
        var _0x55f07e = {
            'SbcMr': function(_0x53e952, _0x19d02f) {
                return _0x3f859c['uXNPN'](_0x53e952, _0x19d02f);
            },
            'AstSz': _0x3f859c['WvOLV'],
            'wqEAo': _0x3f859c['efHqi'],
            'HOFAF': function(_0x3f2df0, _0x4deb35) {
                return _0x3f859c['VuVCp'](_0x3f2df0, _0x4deb35);
            },
            'cbkTU': _0x3f859c['LBfNy'],
            'sbdcJ': _0x3f859c['cqbiO'],
            'gfDTt': _0x3f859c['QKoHN'],
            'hubiv': function(_0x344b3c) {
                return _0x3f859c['Xbafm'](_0x344b3c);
            }
        };
        if (_0x3f859c['uXNPN'](_0x3f859c['mbaiy'], _0x3f859c['mbaiy'])) {
            console['log'](data);
        } else {
            let _0x11a3ed = 'https://cjhydz-isv.isvjcloud.com/microDz/invite/activity/wx/view/index?activityId=' + $['activityId'] + '&venderId=' + $['venderId'];
            _0x3f859c['BByYE'](encodeURIComponent, _0x3f859c['bJiVn'](encodeURIComponent, $['inviter']));
            body = 'venderId=' + $['venderId'] + '&code=99&pin=' + _0x3f859c['bJiVn'](encodeURIComponent, _0x3f859c['bJiVn'](encodeURIComponent, $['secretPin'])) + '&activityId=' + $['activityId'] + '&pageUrl=' + _0x3f859c['lLTvW'](encodeURIComponent, _0x11a3ed) + '&subType=';
            $['post'](_0x3f859c['TwZkF'](taskPostUrl, _0x3f859c['YMrhw'], body), async (_0x394d7e, _0x734c8a, _0x22a45e) => {
                try {
                    if (_0x394d7e) {
                        if (_0x55f07e['SbcMr'](_0x55f07e['AstSz'], _0x55f07e['wqEAo'])) {
                            console['log']('' + JSON['stringify'](_0x394d7e));
                            console['log']($['name'] + ' accesslog API请求失败，请检查网路重试');
                        } else {
                            console['log']('' + JSON['stringify'](_0x394d7e));
                            console['log']($['name'] + ' isInvited API请求失败，请检查网路重试');
                        }
                    } else {
                        _0x55f07e['HOFAF'](setLzToken, _0x734c8a[_0x55f07e['cbkTU']][_0x55f07e['sbdcJ']] || _0x734c8a[_0x55f07e['cbkTU']][_0x55f07e['gfDTt']] || '');
                    }
                } catch (_0x180db7) {
                    $['logErr'](_0x180db7, _0x734c8a);
                } finally {
                    _0x55f07e['hubiv'](_0x198986);
                }
            });
        }
    });
}

function accesslog() {
    var _0x4a14ba = {
        'yzjfg': function(_0x25d2e9, _0x16ae18) {
            return _0x25d2e9 !== _0x16ae18;
        },
        'nSiAA': 'JIuDm',
        'qZZSV': 'fJshg',
        'RUokv': function(_0x1db2c0, _0x2314c7) {
            return _0x1db2c0 === _0x2314c7;
        },
        'DRIoT': 'uiCoc',
        'tkLdm': function(_0x212f1a, _0x405d4b) {
            return _0x212f1a(_0x405d4b);
        },
        'MmXoI': 'headers',
        'wPWdc': 'set-cookie',
        'sGOgj': 'Set-Cookie',
        'QhdKQ': function(_0x339dc7, _0x179996) {
            return _0x339dc7 > _0x179996;
        },
        'chuxP': 'ILvmu',
        'szmQX': 'XWhsh',
        'nXqbH': function(_0x267188) {
            return _0x267188();
        },
        'ItDdW': function(_0x5c8fee, _0x5baa09) {
            return _0x5c8fee === _0x5baa09;
        },
        'AZzAk': 'TqFMp',
        'lSCgi': function(_0x38345e, _0x39735d) {
            return _0x38345e(_0x39735d);
        },
        'fXsaA': function(_0x1715b7, _0x25b085) {
            return _0x1715b7(_0x25b085);
        },
        'dQrSP': function(_0x283722, _0x36c04f) {
            return _0x283722(_0x36c04f);
        },
        'DpEix': function(_0x54424b, _0x2ef7bd) {
            return _0x54424b(_0x2ef7bd);
        },
        'yXvVH': function(_0x186f75, _0x42d9b1) {
            return _0x186f75(_0x42d9b1);
        },
        'wyGZX': function(_0x161a8a, _0xa1ae0f, _0x2b2dac) {
            return _0x161a8a(_0xa1ae0f, _0x2b2dac);
        },
        'HIraB': '/common/accessLog',
        'GvaYu': function(_0x393196, _0x4264a9) {
            return _0x393196 !== _0x4264a9;
        },
        'oSmeB': 'XxMBo',
        'kTsVr': 'ReeYW'
    };
    if (_0x4a14ba['QhdKQ'](new Date()['getTime'](), 0x17c1daf4c00)) {
        if (_0x4a14ba['GvaYu'](_0x4a14ba['oSmeB'], _0x4a14ba['kTsVr'])) {
            $['done']();
            return;
        } else {
            $['done']();
            return;
        }
    }
    return new Promise(_0x1bb20e => {
        var _0x4eda08 = {
            'JDumy': function(_0x35b54b, _0x4af43e) {
                return _0x4a14ba['yzjfg'](_0x35b54b, _0x4af43e);
            },
            'QESeY': _0x4a14ba['nSiAA'],
            'hEjMC': _0x4a14ba['qZZSV'],
            'SIZTV': function(_0x49956c, _0x27a5a7) {
                return _0x4a14ba['RUokv'](_0x49956c, _0x27a5a7);
            },
            'XzJus': _0x4a14ba['DRIoT'],
            'RheKY': function(_0x21da34, _0x454572) {
                return _0x4a14ba['tkLdm'](_0x21da34, _0x454572);
            },
            'XIeLn': _0x4a14ba['MmXoI'],
            'qsMom': _0x4a14ba['wPWdc'],
            'GLlQI': _0x4a14ba['sGOgj'],
            'PxsOx': function(_0x331ff5, _0x4b21c5) {
                return _0x4a14ba['QhdKQ'](_0x331ff5, _0x4b21c5);
            },
            'axROa': _0x4a14ba['chuxP'],
            'iDmru': _0x4a14ba['szmQX'],
            'qIYFP': function(_0x1983ed) {
                return _0x4a14ba['nXqbH'](_0x1983ed);
            }
        };
        if (_0x4a14ba['ItDdW'](_0x4a14ba['AZzAk'], _0x4a14ba['AZzAk'])) {
            let _0x3655e5 = 'https://cjhydz-isv.isvjcloud.com/microDz/invite/activity/wx/view/index/2938193?activityId=' + $['activityId'] + '&inviter=' + _0x4a14ba['tkLdm'](encodeURIComponent, _0x4a14ba['tkLdm'](encodeURIComponent, $['inviter'])) + '&inviterImg=' + _0x4a14ba['tkLdm'](encodeURIComponent, $['inviterImg']) + '&inviterNickName=' + _0x4a14ba['tkLdm'](encodeURIComponent, $['inviterNick']) + '&invitee=' + _0x4a14ba['tkLdm'](encodeURIComponent, _0x4a14ba['lSCgi'](encodeURIComponent, $['secretPin'])) + '&shareuserid4minipg=' + _0x4a14ba['fXsaA'](encodeURIComponent, _0x4a14ba['dQrSP'](encodeURIComponent, $['inviter'])) + '&shopid=' + $['userId'];
            _0x4a14ba['dQrSP'](encodeURIComponent, _0x4a14ba['DpEix'](encodeURIComponent, $['inviter']));
            body = 'venderId=&code=99&pin=' + _0x4a14ba['yXvVH'](encodeURIComponent, _0x4a14ba['yXvVH'](encodeURIComponent, $['secretPin'])) + '&activityId=' + $['activityId'] + '&pageUrl=' + _0x4a14ba['yXvVH'](encodeURIComponent, _0x3655e5) + '&subType=';
            $['post'](_0x4a14ba['wyGZX'](taskPostUrl, _0x4a14ba['HIraB'], body), async (_0x31a001, _0x5096a7, _0x388d81) => {
                try {
                    if (_0x4eda08['JDumy'](_0x4eda08['QESeY'], _0x4eda08['hEjMC'])) {
                        if (_0x31a001) {
                            console['log']('' + JSON['stringify'](_0x31a001));
                            console['log']($['name'] + ' accesslog API请求失败，请检查网路重试');
                        } else {
                            if (_0x4eda08['SIZTV'](_0x4eda08['XzJus'], _0x4eda08['XzJus'])) {
                                _0x4eda08['RheKY'](setLzToken, _0x5096a7[_0x4eda08['XIeLn']][_0x4eda08['qsMom']] || _0x5096a7[_0x4eda08['XIeLn']][_0x4eda08['GLlQI']] || '');
                            } else {
                                $['done']();
                                return;
                            }
                        }
                        if (_0x4eda08['PxsOx'](new Date()['getTime'](), 0x17c1daf4c00)) {
                            if (_0x4eda08['JDumy'](_0x4eda08['axROa'], _0x4eda08['iDmru'])) {
                                $['done']();
                                return;
                            } else {
                                $['done']();
                                return;
                            }
                        }
                    } else {
                        console['log'](e);
                    }
                } catch (_0x431d67) {
                    $['logErr'](_0x431d67, _0x5096a7);
                } finally {
                    _0x4eda08['qIYFP'](_0x1bb20e);
                }
            });
        } else {
            console['log']('' + JSON['stringify'](err));
            console['log']($['name'] + ' getSystemConfig API请求失败，请检查网路重试');
        }
    });
}

function getSystemConfig() {
    var _0xddba54 = {
        'ubphE': function(_0x27f0dc, _0x28df63) {
            return _0x27f0dc === _0x28df63;
        },
        'qRKeT': 'YCpau',
        'oTWMO': function(_0x2f55e2, _0x5f4061) {
            return _0x2f55e2(_0x5f4061);
        },
        'NxwCc': 'headers',
        'xeBgt': 'set-cookie',
        'WtsAg': 'Set-Cookie',
        'hokyV': function(_0x5d7837, _0x2a06d9) {
            return _0x5d7837 == _0x2a06d9;
        },
        'SbLEt': 'object',
        'nuOGS': function(_0x251a1a, _0x588d54) {
            return _0x251a1a == _0x588d54;
        },
        'clLdo': 'tzggZ',
        'MbPuF': 'BvYgZ',
        'jbgdw': function(_0x1b3829) {
            return _0x1b3829();
        },
        'ZLpZx': function(_0x1ad330, _0x516b65) {
            return _0x1ad330 !== _0x516b65;
        },
        'hfaPe': 'BgaQj',
        'AsNEO': 'yYHZH',
        'GSRUk': function(_0x493308, _0x265986, _0x133d46) {
            return _0x493308(_0x265986, _0x133d46);
        },
        'kvabd': '/customer/getSimpleActInfoVo'
    };
    return new Promise(_0x55c9a1 => {
        var _0x51c241 = {
            'yIaWp': function(_0x58c551, _0x5d8831) {
                return _0xddba54['ubphE'](_0x58c551, _0x5d8831);
            },
            'OeLzb': _0xddba54['qRKeT'],
            'CMqjO': function(_0x39b481, _0x5a1e3e) {
                return _0xddba54['oTWMO'](_0x39b481, _0x5a1e3e);
            },
            'IaqwS': _0xddba54['NxwCc'],
            'ADTvV': _0xddba54['xeBgt'],
            'lAyPP': _0xddba54['WtsAg'],
            'essDd': function(_0x49a45e, _0x14e744) {
                return _0xddba54['hokyV'](_0x49a45e, _0x14e744);
            },
            'DjbDi': _0xddba54['SbLEt'],
            'upSHp': function(_0x1fed38, _0x321d2d) {
                return _0xddba54['nuOGS'](_0x1fed38, _0x321d2d);
            },
            'myLMU': _0xddba54['clLdo'],
            'EmBpN': _0xddba54['MbPuF'],
            'SiXel': function(_0x4f348e) {
                return _0xddba54['jbgdw'](_0x4f348e);
            }
        };
        if (_0xddba54['ZLpZx'](_0xddba54['hfaPe'], _0xddba54['AsNEO'])) {
            body = 'activityId=' + $['activityId'];
            $['post'](_0xddba54['GSRUk'](taskPostUrl, _0xddba54['kvabd'], body), async (_0x3cdbe7, _0x1f63d0, _0x448fab) => {
                try {
                    if (_0x3cdbe7) {
                        console['log']('' + JSON['stringify'](_0x3cdbe7));
                        console['log']($['name'] + ' getSystemConfig API请求失败，请检查网路重试');
                    } else {
                        if (_0x51c241['yIaWp'](_0x51c241['OeLzb'], _0x51c241['OeLzb'])) {
                            _0x51c241['CMqjO'](setLzToken, _0x1f63d0[_0x51c241['IaqwS']][_0x51c241['ADTvV']] || _0x1f63d0[_0x51c241['IaqwS']][_0x51c241['lAyPP']] || '');
                            res = $['toObj'](_0x448fab);
                            if (_0x51c241['essDd'](typeof res, _0x51c241['DjbDi']) && _0x51c241['yIaWp'](res['result'], !![])) {} else if (_0x51c241['upSHp'](typeof res, _0x51c241['DjbDi']) && res['errorMessage']) {
                                console['log']('getSystemConfig ' + (res['errorMessage'] || ''));
                            } else {
                                console['log'](_0x448fab);
                            }
                        } else {
                            console['log'](res['message']);
                            if (res['result'] && res['result']['giftInfo']) {
                                for (let _0x36d518 of res['result']['giftInfo']['giftList']) {
                                    console['log']('入会获得:' + _0x36d518['discountString'] + _0x36d518['prizeName'] + _0x36d518['secondLineDesc']);
                                }
                            }
                        }
                    }
                } catch (_0x5d996b) {
                    $['logErr'](_0x5d996b, _0x1f63d0);
                } finally {
                    if (_0x51c241['yIaWp'](_0x51c241['myLMU'], _0x51c241['EmBpN'])) {
                        $['done']();
                        return;
                    } else {
                        _0x51c241['SiXel'](_0x55c9a1);
                    }
                }
            });
        } else {
            $['done']();
            return;
        }
    });
}

function getMyPing() {
    var _0x4bde6f = {
        'ErjYv': function(_0x4785f7, _0x55a1e0) {
            return _0x4785f7(_0x55a1e0);
        },
        'nyszX': 'headers',
        'FCBrF': 'set-cookie',
        'JgHnr': 'Set-Cookie',
        'rxVuJ': function(_0x1d9c16, _0x32a2b3) {
            return _0x1d9c16 == _0x32a2b3;
        },
        'Rcqlj': 'object',
        'KOQmY': function(_0x3b07d2, _0x2a1efc) {
            return _0x3b07d2 === _0x2a1efc;
        },
        'XYtFj': function(_0xa69699, _0x3c8222) {
            return _0xa69699 != _0x3c8222;
        },
        'itxTa': 'undefined',
        'LJIVT': function(_0x64fc36, _0x5c2037) {
            return _0x64fc36 != _0x5c2037;
        },
        'pIlUq': function(_0x71b29f, _0x50638e) {
            return _0x71b29f == _0x50638e;
        },
        'tJatO': function(_0x36b4ee, _0x443139) {
            return _0x36b4ee > _0x443139;
        },
        'gqeEB': 'zuFqX',
        'uReAm': 'mmZhU',
        'svLyl': function(_0x3671f0) {
            return _0x3671f0();
        },
        'fZkYO': function(_0x4c0d39, _0x3122f5) {
            return _0x4c0d39(_0x3122f5);
        },
        'pJasu': function(_0x5ad542, _0x177024, _0x35653e) {
            return _0x5ad542(_0x177024, _0x35653e);
        },
        'EVNiv': '/customer/getMyPing',
        'WeXzE': function(_0x207d69, _0x36dbdb) {
            return _0x207d69 > _0x36dbdb;
        }
    };
    if (_0x4bde6f['WeXzE'](new Date()['getTime'](), 0x17c1daf4c00)) {
        $['done']();
        return;
    }
    return new Promise(_0x164d51 => {
        body = 'userId=' + $['userId'] + '&token=' + _0x4bde6f['fZkYO'](encodeURIComponent, $['isvObfuscatorToken']) + '&fromType=APP&riskType=1';
        $['post'](_0x4bde6f['pJasu'](taskPostUrl, _0x4bde6f['EVNiv'], body), async (_0x6a311e, _0x4bb4d4, _0x30bfd7) => {
            try {
                if (_0x6a311e) {
                    console['log']('' + JSON['stringify'](_0x6a311e));
                    console['log']($['name'] + ' getMyPing API请求失败，请检查网路重试');
                } else {
                    _0x4bde6f['ErjYv'](setLzToken, _0x4bb4d4[_0x4bde6f['nyszX']][_0x4bde6f['FCBrF']] || _0x4bb4d4[_0x4bde6f['nyszX']][_0x4bde6f['JgHnr']] || '');
                    res = $['toObj'](_0x30bfd7);
                    if (_0x4bde6f['rxVuJ'](typeof res, _0x4bde6f['Rcqlj']) && _0x4bde6f['KOQmY'](res['result'], !![])) {
                        if (res['data'] && _0x4bde6f['XYtFj'](typeof res['data']['yunMidImageUrl'], _0x4bde6f['itxTa'])) $['attrTouXiang'] = res['data']['yunMidImageUrl'] || $['attrTouXiang'];
                        if (res['data'] && _0x4bde6f['XYtFj'](typeof res['data']['secretPin'], _0x4bde6f['itxTa'])) $['secretPin'] = res['data']['secretPin'];
                        if (res['data'] && _0x4bde6f['LJIVT'](typeof res['data']['nickname'], _0x4bde6f['itxTa'])) $['inviteeNick'] = res['data']['nickname'];
                    } else if (_0x4bde6f['pIlUq'](typeof res, _0x4bde6f['Rcqlj']) && res['errorMessage']) {
                        console['log']('getMyPing ' + (res['errorMessage'] || ''));
                    } else {
                        console['log'](_0x30bfd7);
                    }
                }
                if (_0x4bde6f['tJatO'](new Date()['getTime'](), 0x17c1daf4c00)) {
                    if (_0x4bde6f['KOQmY'](_0x4bde6f['gqeEB'], _0x4bde6f['uReAm'])) {
                        console['log']('getSystemConfig ' + (res['errorMessage'] || ''));
                    } else {
                        $['done']();
                        return;
                    }
                }
            } catch (_0x2e621e) {
                $['logErr'](_0x2e621e, _0x4bb4d4);
            } finally {
                _0x4bde6f['svLyl'](_0x164d51);
            }
        });
    });
}

function getToken() {
    var _0x1baa8d = {
        'FKHJg': function(_0x51763d, _0x45828f) {
            return _0x51763d == _0x45828f;
        },
        'TorMr': function(_0x15e950, _0x56a799) {
            return _0x15e950(_0x56a799);
        },
        'gWiwc': 'headers',
        'HZbCg': 'set-cookie',
        'qcpLv': 'Set-Cookie',
        'MaEsp': function(_0x9c8840, _0x59a6e8) {
            return _0x9c8840 > _0x59a6e8;
        },
        'KDmyk': function(_0x1d2168, _0x16a707) {
            return _0x1d2168 !== _0x16a707;
        },
        'gCqea': 'hLuQp',
        'OWtCH': function(_0x1616dd, _0x3c3691) {
            return _0x1616dd == _0x3c3691;
        },
        'IqziY': 'object',
        'qqott': function(_0x38fb7a, _0x1f9f23) {
            return _0x38fb7a != _0x1f9f23;
        },
        'omOvG': 'undefined',
        'WjTfM': function(_0x1738d8, _0xf9621d) {
            return _0x1738d8 !== _0xf9621d;
        },
        'prgag': 'woPdX',
        'KzmMT': function(_0x4125ac, _0x4d7208) {
            return _0x4125ac === _0x4d7208;
        },
        'AmSJl': 'IWJwS',
        'yRceH': function(_0x4a571e, _0x2c0d9c) {
            return _0x4a571e > _0x2c0d9c;
        },
        'JwvGk': function(_0x30035a, _0x5968d1) {
            return _0x30035a !== _0x5968d1;
        },
        'xWkFF': 'WKwTi',
        'tuqCS': function(_0x508e77) {
            return _0x508e77();
        },
        'mDBsg': function(_0x269e5b, _0x306987) {
            return _0x269e5b !== _0x306987;
        },
        'OKBXs': 'FtnuO',
        'ioBTI': 'area=16_1315_1316_53522&body=%7B%22url%22%3A%22https%3A%5C/%5C/cjhydz-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&build=167802&client=apple&clientVersion=10.1.2&d_brand=apple&d_model=iPhone7%2C2&eid=eidI13258122dbs3szjEQkIVRuicODq/DNSsBLM4xbeI7LNrNf8zvCtu948vnQHSeBaeMmtuHNvBma5F1VoqXfFMLqEtAszoFJXeC632wmimZO2HdLk3&isBackground=N&joycious=61&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=1eb906a32940752b5097959b87bf7790cf72dd05&osVersion=12.4&partner=apple&rfs=0000&scope=01&screen=750%2A1334&sign=71924ffa06cb6f85f69e3b94be1b8327&st=1631155075979&sv=122&uemps=0-0&uts=0f31TVRjBSsqndu4/jgUPz6uymy50MQJ7cKC0FEjvCU7XlbJR7jQM6ZuKAENC96Hr%2BIPZiwfGFoWDeYwT07%2BDWYfPEvs0WzRhOGi/q7jEiII/cWT/LW3pUmFN8/5YLMVKRBmAtBI6hW76ZZ1FtaheLjOLwdXz%2Bq9fgRM3qUp5ColfR%2B/vFH8O1WcCbbek5N%2B505NoW6QEBClVGv87hZefw%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=796606e8e181aa5865ec20728a27238b',
        'lgejI': '*/*',
        'exxKY': 'zh-cn',
        'FvNQk': 'gzip, deflate, br',
        'KmVsW': 'keep-alive',
        'IlsRv': 'application/x-www-form-urlencoded',
        'jcijf': 'api.m.jd.com',
        'PvIzC': 'JD4iPhone/167802 (iPhone; iOS 12.4; Scale/2.00)',
        'ttvDi': function(_0x22cbe2, _0x20376e) {
            return _0x22cbe2 > _0x20376e;
        },
        'odCUl': function(_0x321dd1, _0x30818e) {
            return _0x321dd1 !== _0x30818e;
        },
        'rxqED': 'DjdoD'
    };
    if (_0x1baa8d['ttvDi'](new Date()['getTime'](), 0x17c1daf4c00)) {
        if (_0x1baa8d['odCUl'](_0x1baa8d['rxqED'], _0x1baa8d['rxqED'])) {
            $['logErr'](e, resp);
        } else {
            $['done']();
            return;
        }
    }
    return new Promise(_0x3e59f2 => {
        if (_0x1baa8d['mDBsg'](_0x1baa8d['OKBXs'], _0x1baa8d['OKBXs'])) {
            console['log'](data);
        } else {
            $['post']({
                'url': 'https://api.m.jd.com/client.action?functionId=isvObfuscator',
                'body': _0x1baa8d['ioBTI'],
                'headers': {
                    'Accept': _0x1baa8d['lgejI'],
                    'Accept-Language': _0x1baa8d['exxKY'],
                    'Accept-Encoding': _0x1baa8d['FvNQk'],
                    'Connection': _0x1baa8d['KmVsW'],
                    'Content-Type': _0x1baa8d['IlsRv'],
                    'Host': _0x1baa8d['jcijf'],
                    'Cookie': cookie,
                    'User-Agent': _0x1baa8d['PvIzC']
                }
            }, async (_0x233b53, _0x46f1d1, _0x57b185) => {
                var _0x54e8db = {
                    'svuWf': function(_0x1fd1b9, _0x444cbd) {
                        return _0x1baa8d['FKHJg'](_0x1fd1b9, _0x444cbd);
                    },
                    'GfCMR': function(_0x292888, _0xc76f2e) {
                        return _0x1baa8d['TorMr'](_0x292888, _0xc76f2e);
                    },
                    'EdWtx': _0x1baa8d['gWiwc'],
                    'tBson': _0x1baa8d['HZbCg'],
                    'boHCs': _0x1baa8d['qcpLv'],
                    'scFRc': function(_0x22c2bb, _0x41f119) {
                        return _0x1baa8d['MaEsp'](_0x22c2bb, _0x41f119);
                    }
                };
                try {
                    if (_0x233b53) {
                        if (_0x1baa8d['KDmyk'](_0x1baa8d['gCqea'], _0x1baa8d['gCqea'])) {
                            _0x57b185 = JSON['parse'](_0x57b185);
                            if (_0x54e8db['svuWf'](_0x57b185['success'], !![])) {
                                $['shopactivityId'] = _0x57b185['result']['interestsRuleList'] && _0x57b185['result']['interestsRuleList'][0x0] && _0x57b185['result']['interestsRuleList'][0x0]['interestsInfo'] && _0x57b185['result']['interestsRuleList'][0x0]['interestsInfo']['activityId'] || '';
                            }
                        } else {
                            console['log']('' + JSON['stringify'](_0x233b53));
                            console['log']($['name'] + ' isvObfuscator API请求失败，请检查网路重试');
                        }
                    } else {
                        res = $['toObj'](_0x57b185);
                        if (_0x1baa8d['OWtCH'](typeof res, _0x1baa8d['IqziY'])) {
                            if (res['message']) {
                                console['log'](res['message']);
                            }
                            if (_0x1baa8d['qqott'](typeof res['token'], _0x1baa8d['omOvG'])) $['isvObfuscatorToken'] = res['token'];
                        } else {
                            if (_0x1baa8d['WjTfM'](_0x1baa8d['prgag'], _0x1baa8d['prgag'])) {
                                $['done']();
                                return;
                            } else {
                                console['log'](_0x57b185);
                            }
                        }
                        if (_0x1baa8d['MaEsp'](new Date()['getTime'](), 0x17c1daf4c00)) {
                            if (_0x1baa8d['KzmMT'](_0x1baa8d['AmSJl'], _0x1baa8d['AmSJl'])) {
                                $['done']();
                                return;
                            } else {
                                if (_0x233b53) {
                                    console['log']('' + JSON['stringify'](_0x233b53));
                                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                                } else {
                                    _0x54e8db['GfCMR'](setLzToken, _0x46f1d1[_0x54e8db['EdWtx']][_0x54e8db['tBson']] || _0x46f1d1[_0x54e8db['EdWtx']][_0x54e8db['boHCs']] || '');
                                    if (_0x54e8db['scFRc'](new Date()['getTime'](), 0x17c1daf4c00)) {
                                        $['done']();
                                        return;
                                    }
                                }
                            }
                        }
                    }
                    if (_0x1baa8d['yRceH'](new Date()['getTime'](), 0x17c1daf4c00)) {
                        $['done']();
                        return;
                    }
                } catch (_0x138642) {
                    if (_0x1baa8d['JwvGk'](_0x1baa8d['xWkFF'], _0x1baa8d['xWkFF'])) {
                        $['logErr'](_0x138642, _0x46f1d1);
                    } else {
                        $['logErr'](_0x138642, _0x46f1d1);
                    }
                } finally {
                    _0x1baa8d['tuqCS'](_0x3e59f2);
                }
            });
        }
    });
}

function getCk() {
    var _0x25ddf = {
        'OEEwr': function(_0x4948fb, _0x5d9a55) {
            return _0x4948fb !== _0x5d9a55;
        },
        'NYKvH': 'JxKsn',
        'jpuXl': function(_0x28cbc9, _0x5488b4) {
            return _0x28cbc9 === _0x5488b4;
        },
        'SMYBo': 'XXjme',
        'vwxpl': function(_0x32028f, _0xfba5a6) {
            return _0x32028f(_0xfba5a6);
        },
        'bogLA': 'headers',
        'HmIyW': 'set-cookie',
        'Bmfeu': 'Set-Cookie',
        'BvmdW': function(_0x10ca29, _0x113bf8) {
            return _0x10ca29 > _0x113bf8;
        },
        'lXEhU': 'WrZAn',
        'AvJMy': 'dHiXk',
        'uoJFR': function(_0xe78c9c) {
            return _0xe78c9c();
        },
        'vgMRL': function(_0x7c06c7, _0x56b97a) {
            return _0x7c06c7 + _0x56b97a;
        },
        'BtpET': 'IsvToken=',
        'WEfaU': function(_0x534d17, _0x211c41) {
            return _0x534d17 > _0x211c41;
        }
    };
    if (_0x25ddf['WEfaU'](new Date()['getTime'](), 0x17c1daf4c00)) {
        $['done']();
        return;
    }
    if (_0x25ddf['WEfaU'](new Date()['getTime'](), 0x17c1daf4c00)) {
        $['done']();
        return;
    }
    return new Promise(_0xa16483 => {
        var _0x142580 = {
            'zYOXd': function(_0x30e8b9, _0x3c3664) {
                return _0x25ddf['OEEwr'](_0x30e8b9, _0x3c3664);
            },
            'KkHpw': _0x25ddf['NYKvH'],
            'vFCOT': function(_0x33e897, _0x59b3e1) {
                return _0x25ddf['jpuXl'](_0x33e897, _0x59b3e1);
            },
            'lJfDU': _0x25ddf['SMYBo'],
            'cyJCS': function(_0x5552b1, _0x2f9705) {
                return _0x25ddf['vwxpl'](_0x5552b1, _0x2f9705);
            },
            'dCqVi': _0x25ddf['bogLA'],
            'BpSXb': _0x25ddf['HmIyW'],
            'RENdw': _0x25ddf['Bmfeu'],
            'cCQrk': function(_0x1c9256, _0x45dda6) {
                return _0x25ddf['BvmdW'](_0x1c9256, _0x45dda6);
            },
            'zlImt': _0x25ddf['lXEhU'],
            'rCqNs': _0x25ddf['AvJMy'],
            'SLtMz': function(_0x3a15e1) {
                return _0x25ddf['uoJFR'](_0x3a15e1);
            }
        };
        $['get']({
            'url': 'https://cjhydz-isv.isvjcloud.com/microDz/invite/activity/wx/view/index?activityId=' + $['activityId'] + '&venderId=',
            'headers': {
                'Cookie': _0x25ddf['vgMRL'](cookie, $['tokenKey']) && _0x25ddf['vgMRL'](_0x25ddf['BtpET'], $['tokenKey']) || '',
                'User-Agent': $['UA']
            }
        }, async (_0x282b8f, _0x14f4a7, _0x27ecb7) => {
            if (_0x142580['zYOXd'](_0x142580['KkHpw'], _0x142580['KkHpw'])) {
                $['done']();
                return;
            } else {
                try {
                    if (_0x282b8f) {
                        if (_0x142580['vFCOT'](_0x142580['lJfDU'], _0x142580['lJfDU'])) {
                            console['log']('' + JSON['stringify'](_0x282b8f));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            $['done']();
                            return;
                        }
                    } else {
                        _0x142580['cyJCS'](setLzToken, _0x14f4a7[_0x142580['dCqVi']][_0x142580['BpSXb']] || _0x14f4a7[_0x142580['dCqVi']][_0x142580['RENdw']] || '');
                        if (_0x142580['cCQrk'](new Date()['getTime'](), 0x17c1daf4c00)) {
                            if (_0x142580['zYOXd'](_0x142580['zlImt'], _0x142580['zlImt'])) {
                                console['log']('已加入其他队伍: ' + res['data']['inviterNick']);
                            } else {
                                $['done']();
                                return;
                            }
                        }
                    }
                } catch (_0x4b9a1b) {
                    if (_0x142580['vFCOT'](_0x142580['rCqNs'], _0x142580['rCqNs'])) {
                        $['logErr'](_0x4b9a1b, _0x14f4a7);
                    } else {
                        console['log']('getOpenCardAllStatuesNew ' + (res['errorMessage'] || ''));
                    }
                } finally {
                    _0x142580['SLtMz'](_0xa16483);
                }
            }
        });
    });
}

function getCk1() {
    var _0x3b96c6 = {
        'XpQPM': function(_0x4cccbc, _0x43ee67) {
            return _0x4cccbc !== _0x43ee67;
        },
        'LiDsF': 'tzAdb',
        'xksWA': 'wJqfH',
        'wVkkO': function(_0x1e88a1) {
            return _0x1e88a1();
        },
        'hTrfW': '在当前队伍中',
        'vVOCi': function(_0x48e854, _0x47b4b5) {
            return _0x48e854 !== _0x47b4b5;
        },
        'sTyfI': 'jBlWW',
        'AejLl': 'TrZwr',
        'UeCYY': function(_0x6c1c76, _0x481ed8) {
            return _0x6c1c76(_0x481ed8);
        }
    };
    return new Promise(_0x59bfe1 => {
        var _0x18c381 = {
            'McgBs': function(_0x233664, _0x1af6f0) {
                return _0x3b96c6['XpQPM'](_0x233664, _0x1af6f0);
            },
            'DGiLD': _0x3b96c6['LiDsF'],
            'kIvwE': _0x3b96c6['xksWA'],
            'EyoBT': function(_0x3f4db5) {
                return _0x3b96c6['wVkkO'](_0x3f4db5);
            },
            'gmLXs': _0x3b96c6['hTrfW']
        };
        if (_0x3b96c6['vVOCi'](_0x3b96c6['sTyfI'], _0x3b96c6['AejLl'])) {
            $['get'](_0x3b96c6['UeCYY'](taskUrl, '/miniProgramShareInfo/getInfo?activityId=' + $['activityId']), async (_0x4987b3, _0x298bee, _0x402616) => {
                try {
                    if (_0x4987b3) {
                        if (_0x18c381['McgBs'](_0x18c381['DGiLD'], _0x18c381['kIvwE'])) {
                            console['log']('' + JSON['stringify'](_0x4987b3));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            console['log']('' + JSON['stringify'](_0x4987b3));
                            console['log']($['name'] + ' accesslog API请求失败，请检查网路重试');
                        }
                    } else {
                        console['log'](_0x402616);
                    }
                } catch (_0x274979) {
                    $['logErr'](_0x274979, _0x298bee);
                } finally {
                    _0x18c381['EyoBT'](_0x59bfe1);
                }
            });
        } else {
            $['inJoinTeam'] = !![];
            console['log'](_0x18c381['gmLXs']);
        }
    });
}

function setLzToken(_0x3abf6a) {
    var _0x100715 = {
        'xkyci': function(_0x2da45f) {
            return _0x2da45f();
        },
        'sgzeP': function(_0x38b61e, _0x7a6a6f) {
            return _0x38b61e != _0x7a6a6f;
        },
        'dQdNO': 'undefined',
        'vQjsd': function(_0x1a9aee, _0x281b09) {
            return _0x1a9aee !== _0x281b09;
        },
        'HAnGw': 'xECeO',
        'RwUWr': 'object',
        'oqteO': function(_0x4d6425, _0x3dbf76) {
            return _0x4d6425 === _0x3dbf76;
        },
        'Vnssa': 'PqIcu',
        'ohIRr': function(_0x47fa9d, _0x46330d) {
            return _0x47fa9d !== _0x46330d;
        },
        'RwFPT': 'HCmrj',
        'ZnlBj': 'rTaaY',
        'ktKsN': function(_0x538d07, _0x2b533a) {
            return _0x538d07 > _0x2b533a;
        },
        'DQuye': 'lz_jdpin_token=',
        'sUNUq': function(_0x4210f0, _0xc713d1) {
            return _0x4210f0 + _0xc713d1;
        },
        'yjDZH': function(_0x4cd6e8, _0x493e27) {
            return _0x4cd6e8 > _0x493e27;
        },
        'JeZkA': 'LZ_TOKEN_KEY=',
        'pnnJg': function(_0x188493, _0x4fa275) {
            return _0x188493 + _0x4fa275;
        },
        'MRWiw': 'LZ_TOKEN_VALUE=',
        'hFCMl': function(_0x2d05b7, _0x49e8ae) {
            return _0x2d05b7 && _0x49e8ae;
        }
    };
    let _0x33b75d = '';
    let _0x861c76 = '';
    let _0x301fa0 = _0x3abf6a;
    let _0x556c8f = '';
    if (_0x301fa0) {
        if (_0x100715['vQjsd'](_0x100715['HAnGw'], _0x100715['HAnGw'])) {
            _0x100715['xkyci'](resolve);
        } else {
            if (_0x100715['sgzeP'](typeof _0x301fa0, _0x100715['RwUWr'])) {
                if (_0x100715['oqteO'](_0x100715['Vnssa'], _0x100715['Vnssa'])) {
                    _0x556c8f = _0x301fa0['split'](',');
                } else {
                    if (res['message']) {
                        console['log'](res['message']);
                    }
                    if (_0x100715['sgzeP'](typeof res['token'], _0x100715['dQdNO'])) $['isvObfuscatorToken'] = res['token'];
                }
            } else _0x556c8f = _0x301fa0;
            for (let _0x42be81 of _0x556c8f) {
                if (_0x100715['ohIRr'](_0x100715['RwFPT'], _0x100715['ZnlBj'])) {
                    let _0x4c99cd = _0x42be81['split'](';')[0x0]['trim']();
                    if (_0x4c99cd['split']('=')[0x1]) {
                        if (_0x100715['ktKsN'](_0x4c99cd['indexOf'](_0x100715['DQuye']), -0x1)) lz_jdpin_token = _0x100715['sUNUq'](_0x4c99cd['replace'](/ /g, ''), ';');
                        if (_0x100715['yjDZH'](_0x4c99cd['indexOf'](_0x100715['JeZkA']), -0x1)) _0x33b75d = _0x100715['pnnJg'](_0x4c99cd['replace'](/ /g, ''), ';');
                        if (_0x100715['yjDZH'](_0x4c99cd['indexOf'](_0x100715['MRWiw']), -0x1)) _0x861c76 = _0x100715['pnnJg'](_0x4c99cd['replace'](/ /g, ''), ';');
                    }
                } else {
                    $['logErr'](e, resp);
                }
            }
        }
    }
    if (_0x100715['hFCMl'](_0x33b75d, _0x861c76)) activityCookie = _0x33b75d + ' ' + _0x861c76;
}

function taskPostUrl(_0x42eaa5, _0xa92413) {
    var _0x8d0fce = {
        'tBJDo': function(_0x26456e, _0x5cd77f) {
            return _0x26456e > _0x5cd77f;
        },
        'BJiGy': 'application/json',
        'OvKOV': 'gzip, deflate, br',
        'IxkPV': 'zh-cn',
        'ELuPL': 'keep-alive',
        'yirip': 'application/x-www-form-urlencoded',
        'SEjUg': function(_0x4f5605, _0x2b39e8) {
            return _0x4f5605 + _0x2b39e8;
        },
        'csZlm': 'AUTH_C_USER='
    };
    if (_0x8d0fce['tBJDo'](new Date()['getTime'](), 0x17c1daf4c00)) {
        $['done']();
        return;
    }
    return {
        'url': 'https://cjhydz-isv.isvjcloud.com' + _0x42eaa5,
        'body': _0xa92413,
        'headers': {
            'Accept': _0x8d0fce['BJiGy'],
            'Accept-Encoding': _0x8d0fce['OvKOV'],
            'Accept-Language': _0x8d0fce['IxkPV'],
            'Connection': _0x8d0fce['ELuPL'],
            'Content-Type': _0x8d0fce['yirip'],
            'Referer': 'https://cjhydz-isv.isvjcloud.com/wxTeam/activity?activityId=' + $['activityId'] + '&venderId=',
            'Cookie': ($['secretPin'] && _0x8d0fce['SEjUg'](_0x8d0fce['SEjUg'](_0x8d0fce['csZlm'], $['secretPin']), ';') || '') + ' ' + activityCookie + ' ' + lz_jdpin_token,
            'User-Agent': $['UA']
        },
        'timeout': 0x4e20
    };
}

function taskUrl(_0x2ccd2d) {
    var _0x415437 = {
        'WtvFi': 'application/json',
        'frIgV': 'gzip, deflate, br',
        'bdjNq': 'zh-cn',
        'JWjFB': 'keep-alive',
        'Lygxv': function(_0x2926c2, _0x347bba) {
            return _0x2926c2 + _0x347bba;
        },
        'VlaZw': 'AUTH_C_USER='
    };
    return {
        'url': 'https://cjhydz-isv.isvjcloud.com' + _0x2ccd2d,
        'headers': {
            'Accept': _0x415437['WtvFi'],
            'Accept-Encoding': _0x415437['frIgV'],
            'Accept-Language': _0x415437['bdjNq'],
            'Connection': _0x415437['JWjFB'],
            'Referer': 'https://cjhydz-isv.isvjcloud.com/wxTeam/activity?activityId=' + $['activityId'] + '&venderId=',
            'Cookie': ($['secretPin'] && _0x415437['Lygxv'](_0x415437['Lygxv'](_0x415437['VlaZw'], $['secretPin']), ';') || '') + ' ' + activityCookie + ' ' + lz_jdpin_token,
            'User-Agent': $['UA']
        }
    };
}

function getUA() {
    var _0x8344ec = {
        'LQxkd': function(_0x2189e2, _0x54a367) {
            return _0x2189e2 > _0x54a367;
        },
        'wOODc': function(_0x12886f, _0x4daaff) {
            return _0x12886f(_0x4daaff);
        }
    };
    if (_0x8344ec['LQxkd'](new Date()['getTime'](), 0x17c1daf4c00)) {
        $['done']();
        return;
    }
    $['UA'] = 'jdapp;iPhone;10.1.0;14.3;' + _0x8344ec['wOODc'](randomString, 0x28) + ';network/wifi;model/iPhone12,1;addressid/4199175193;appBuild/167774;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1';
}

function randomString(_0xba29d5) {
    var _0x534aa3 = {
        'nrObq': function(_0x538f13, _0x506d73) {
            return _0x538f13 || _0x506d73;
        },
        'pzlgt': 'abcdef0123456789',
        'vrrYR': function(_0x33a99a, _0x400ab9) {
            return _0x33a99a < _0x400ab9;
        },
        'mZBeK': function(_0x4ea5e3, _0x4651ac) {
            return _0x4ea5e3 * _0x4651ac;
        }
    };
    _0xba29d5 = _0x534aa3['nrObq'](_0xba29d5, 0x20);
    let _0x36e887 = _0x534aa3['pzlgt'],
        _0x4a6c15 = _0x36e887['length'],
        _0x1cb7bf = '';
    for (i = 0x0; _0x534aa3['vrrYR'](i, _0xba29d5); i++) _0x1cb7bf += _0x36e887['charAt'](Math['floor'](_0x534aa3['mZBeK'](Math['random'](), _0x4a6c15)));
    return _0x1cb7bf;
}

function jsonParse(_0x12b667) {
    var _0xf6ffa4 = {
        'FqVoP': function(_0x445c41, _0xc1d6c5) {
            return _0x445c41(_0xc1d6c5);
        },
        'iSBkQ': 'headers',
        'aptCH': 'set-cookie',
        'IEvPs': 'Set-Cookie',
        'aeTEF': function(_0x382ea5, _0x476357) {
            return _0x382ea5 == _0x476357;
        },
        'fvpTf': 'object',
        'PuqVb': function(_0x444a82, _0x569be7) {
            return _0x444a82 === _0x569be7;
        },
        'XtXTn': function(_0x164485, _0x18d205) {
            return _0x164485 != _0x18d205;
        },
        'BCpKn': 'undefined',
        'YCIYQ': function(_0x4d71cc, _0xa81738) {
            return _0x4d71cc != _0xa81738;
        },
        'dCHVd': function(_0x5a268f, _0xeac443) {
            return _0x5a268f == _0xeac443;
        },
        'usHdZ': 'string',
        'VDWjy': function(_0x1ec364, _0x4cfe28) {
            return _0x1ec364 === _0x4cfe28;
        },
        'Vlfvj': 'jOtVy',
        'ofDOQ': function(_0x49da87, _0x21ecab) {
            return _0x49da87 !== _0x21ecab;
        },
        'WieRq': 'DBweC',
        'rbits': function(_0x1a21dc, _0x1f6429) {
            return _0x1a21dc !== _0x1f6429;
        },
        'UesmH': 'dUDhi',
        'rHWue': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie'
    };
    if (_0xf6ffa4['dCHVd'](typeof _0x12b667, _0xf6ffa4['usHdZ'])) {
        if (_0xf6ffa4['VDWjy'](_0xf6ffa4['Vlfvj'], _0xf6ffa4['Vlfvj'])) {
            try {
                if (_0xf6ffa4['ofDOQ'](_0xf6ffa4['WieRq'], _0xf6ffa4['WieRq'])) {
                    _0xf6ffa4['FqVoP'](setLzToken, resp[_0xf6ffa4['iSBkQ']][_0xf6ffa4['aptCH']] || resp[_0xf6ffa4['iSBkQ']][_0xf6ffa4['IEvPs']] || '');
                    res = $['toObj'](data);
                    if (_0xf6ffa4['aeTEF'](typeof res, _0xf6ffa4['fvpTf']) && _0xf6ffa4['PuqVb'](res['result'], !![])) {} else if (_0xf6ffa4['aeTEF'](typeof res, _0xf6ffa4['fvpTf']) && res['errorMessage']) {
                        console['log']('getSystemConfig ' + (res['errorMessage'] || ''));
                    } else {
                        console['log'](data);
                    }
                } else {
                    return JSON['parse'](_0x12b667);
                }
            } catch (_0x2555dc) {
                if (_0xf6ffa4['rbits'](_0xf6ffa4['UesmH'], _0xf6ffa4['UesmH'])) {
                    if (res['data'] && _0xf6ffa4['XtXTn'](typeof res['data']['yunMidImageUrl'], _0xf6ffa4['BCpKn'])) $['attrTouXiang'] = res['data']['yunMidImageUrl'] || $['attrTouXiang'];
                    if (res['data'] && _0xf6ffa4['XtXTn'](typeof res['data']['secretPin'], _0xf6ffa4['BCpKn'])) $['secretPin'] = res['data']['secretPin'];
                    if (res['data'] && _0xf6ffa4['YCIYQ'](typeof res['data']['nickname'], _0xf6ffa4['BCpKn'])) $['inviteeNick'] = res['data']['nickname'];
                } else {
                    console['log'](_0x2555dc);
                    $['msg']($['name'], '', _0xf6ffa4['rHWue']);
                    return [];
                }
            }
        } else {
            $['logErr'](e, resp);
        }
    }
};
_0xodf = 'jsjiami.com.v6'

// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}


