import browser from 'webextension-polyfill';
import * as ContentScript from '../../../source/ContentScript/index';
import { defaultJapanesifyState } from '../../../source/utils/constants';
import { basic, excludedElements } from '../../fixtures/html';
import {
  hiraA,
  hiraE,
  hiraI,
  hiraN,
  hiraO,
  hiraRomaA,
  hiraRomaE,
  hiraRomaI,
  romaN,
  hiraRomaO,
  hiraRomaU,
  hiraU,
  romaHanDakYoonA,
  hiraHanDakYoonA,
  romaHanDakI,
  hiraHanDakI,
  romaHanDakYoonU,
  hiraHanDakYoonU,
  romaHanDakE,
  hiraHanDakE,
  hiraHanDakYoonO,
  romaHanDakYoonO,
  kataN,
  kataA,
  kataRomaA,
  kataI,
  kataRomaI,
  kataRomaU,
  kataU,
  kataRomaE,
  kataE,
  kataO,
  kataRomaO,
  kataHanDakYoonA,
  kataHanDakI,
  kataHanDakYoonU,
  kataHanDakE,
  kataHanDakYoonO,
} from '../../fixtures/testInputs';

describe('Content Script', () => {
  const convertText = ContentScript.convertText;
  const convertSpy = jest.spyOn(ContentScript, 'convertText');

  beforeEach(() => {
    convertSpy.mockClear();
    document.body.innerHTML = '';
    window.localStorage.clear()
    ContentScript.togglePluginListener(defaultJapanesifyState);
  });

  test('sets textContent to empty string if null', () => {
    const text = document.createTextNode('div');
    text.textContent = null;
    convertText(text, { ...defaultJapanesifyState, enabled: true, n: true });

    expect(text.textContent).toBe('');
  });

  test('adds message listener', async () => {
    expect(browser.runtime.onMessage.addListener).toBeCalled();
  });

  test('executes convertText when new nodes get added', async () => {
    document.body.innerHTML = basic;

    ContentScript.togglePluginListener({
      ...defaultJapanesifyState,
      enabled: true,
      n: true,
    });

    // Since convertText is called recursively it has 6 executions by the time
    // this expect ie reached.
    expect(convertSpy).toBeCalledTimes(6);

    const newDiv = document.createElement('div');
    newDiv.textContent = 'Sample text to convert to Japanese';

    // await does seem to do something ¯\_(ツ)_/¯
    await document.body.appendChild(newDiv);

    // convertText is executed 2 more times once for the div
    // another for the text node.
    expect(convertSpy).toBeCalledTimes(8);
  });

  test('does Not converts roman character n to hiragana ん if not enabled', () => {
    document.body.innerHTML = basic;
    ContentScript.togglePluginListener({
      ...defaultJapanesifyState,
      enabled: false,
      n: true,
    });

    expect(document.body.textContent).toContain('n');
    expect(document.body.textContent).not.toContain('ん');
  });

  test('does not call convert if hiragana character none are selected', () => {
    ContentScript.togglePluginListener({
      ...defaultJapanesifyState,
      enabled: true,
    });
    ContentScript.togglePluginListener({
      ...defaultJapanesifyState,
      enabled: false,
    });

    expect(convertSpy).not.toBeCalled();
  });

  test.each`
    checkbox | syllables    | hiraganas
    ${'n'}   | ${romaN}     | ${hiraN}
    ${'a'}   | ${hiraRomaA} | ${hiraA}
    ${'i'}   | ${hiraRomaI} | ${hiraI}
    ${'u'}   | ${hiraRomaU} | ${hiraU}
    ${'e'}   | ${hiraRomaE} | ${hiraE}
    ${'o'}   | ${hiraRomaO} | ${hiraO}
  `(
    'converts "$checkbox" syllables to "$hiraganas" and back if enable button gets toggled',
    ({ checkbox, syllables, hiraganas }) => {
      document.body.innerHTML = basic;

      const original = document.body.textContent;

      ContentScript.togglePluginListener({
        ...defaultJapanesifyState,
        enabled: true,
        [checkbox]: true,
      });

      hiraganas.forEach((_: string, i: number) => {
        expect(document.body.textContent).toContain(hiraganas[i]);
        expect(document.body.textContent).not.toContain(syllables[i]);
      });

      ContentScript.togglePluginListener({
        ...defaultJapanesifyState,
        enabled: false,
        [checkbox]: true,
      });
      expect(document.body.textContent).toStrictEqual(original);
    }
  );

    test.each`
    checkbox | syllables    | katakanas
    ${'n'}   | ${romaN}     | ${kataN}
    ${'a'}   | ${kataRomaA} | ${kataA}
    ${'i'}   | ${kataRomaI} | ${kataI}
    ${'u'}   | ${kataRomaU} | ${kataU}
    ${'e'}   | ${kataRomaE} | ${kataE}
    ${'o'}   | ${kataRomaO} | ${kataO}
  `(
    'converts "$checkbox" syllables to "$katakanas" and back if enable button gets toggled',
    ({ checkbox, syllables, katakanas }) => {
      document.body.innerHTML = basic;

      const original = document.body.textContent;

      ContentScript.togglePluginListener({
        ...defaultJapanesifyState,
        kana: 'katakana',
        enabled: true,
        [checkbox]: true,
      });

      katakanas.forEach((_: string, i: number) => {
        expect(document.body.textContent).toContain(katakanas[i]);
        expect(document.body.textContent).not.toContain(syllables[i]);
      });

      ContentScript.togglePluginListener({
        ...defaultJapanesifyState,
        kana: 'katakana',
        enabled: false,
        [checkbox]: true,
      });
      expect(document.body.textContent).toStrictEqual(original);
    }
  );

  test.each`
    checkbox | syllables    | hiraganas
    ${'n'}   | ${romaN}     | ${hiraN}
    ${'a'}   | ${hiraRomaA} | ${hiraA}
    ${'i'}   | ${hiraRomaI} | ${hiraI}
    ${'u'}   | ${hiraRomaU} | ${hiraU}
    ${'e'}   | ${hiraRomaE} | ${hiraE}
    ${'o'}   | ${hiraRomaO} | ${hiraO}
  `(
    'converts "$checkbox" syllables to "$hiraganas" and back if a checkbox gets toggled',
    ({ checkbox, syllables, hiraganas }) => {
      document.body.innerHTML = basic;

      const original = document.body.textContent;

      ContentScript.togglePluginListener({
        ...defaultJapanesifyState,
        enabled: true,
        [checkbox]: true,
      });
      hiraganas.forEach((_: string, i: number) => {
        expect(document.body.textContent).toContain(hiraganas[i]);
        expect(document.body.textContent).not.toContain(syllables[i]);
      });

      ContentScript.togglePluginListener({
        ...defaultJapanesifyState,
        enabled: true,
      });
      expect(document.body.textContent).toStrictEqual(original);
    }
  );

  test.each`
    checkbox | syllables    | katakanas
    ${'n'}   | ${romaN}     | ${kataN}
    ${'a'}   | ${kataRomaA} | ${kataA}
    ${'i'}   | ${kataRomaI} | ${kataI}
    ${'u'}   | ${kataRomaU} | ${kataU}
    ${'e'}   | ${kataRomaE} | ${kataE}
    ${'o'}   | ${kataRomaO} | ${kataO}
  `(
    'converts "$checkbox" syllables to "$katakanas" and back if a checkbox gets toggled',
    ({ checkbox, syllables, katakanas }) => {
      document.body.innerHTML = basic;

      const original = document.body.textContent;

      ContentScript.togglePluginListener({
        ...defaultJapanesifyState,
        kana: 'katakana',
        enabled: true,
        [checkbox]: true,
      });
      katakanas.forEach((_: string, i: number) => {
        expect(document.body.textContent).toContain(katakanas[i]);
        expect(document.body.textContent).not.toContain(syllables[i]);
      });

      ContentScript.togglePluginListener({
        ...defaultJapanesifyState,
        kana: 'katakana',
        enabled: true,
      });
      expect(document.body.textContent).toStrictEqual(original);
    }
  );

  test('Should not convert script tag contents', () => {
    document.body.innerHTML = excludedElements;
    ContentScript.togglePluginListener({
      ...defaultJapanesifyState,
      enabled: true,
      n: true,
    });

    expect(document.body.textContent).toContain("[].push('text with an n');");
  });

  test('Should not convert style tag contents', () => {
    document.body.innerHTML = excludedElements;
    ContentScript.togglePluginListener({
      ...defaultJapanesifyState,
      enabled: true,
      n: true,
    });

    expect(document.body.textContent).toContain(
      '.mw-editfont-monospace{font-family:monospace,monospace}'
    );
  });

  // TODO: add tests for n yoon
  test('Should convert n hira ("に", "な", ...) to roma ("ni", "na", ...) when n and $vowel enabled and plugin gets disabled', () => {
    document.body.innerHTML = basic;

    const original = document.body.textContent;

    const vowels = ['i', 'a', 'u', 'e', 'o'];
    const hiras = ['に', 'な', 'ぬ', 'ね', 'の'];
    const hirasComb = ['んい', 'んあ', 'んう', 'んえ', 'んお'];

    vowels.forEach((_: string, i: number) => {
      ContentScript.togglePluginListener({
        ...defaultJapanesifyState,
        enabled: true,
        n: true,
        [vowels[i]]: true,
      });
      expect(document.body.textContent).not.toContain(hirasComb[i]);
      expect(document.body.textContent).toContain(hiras[i]);

      ContentScript.togglePluginListener({
        ...defaultJapanesifyState,
        n: true,
        [vowels[i]]: true,
      });
      expect(document.body.textContent).toStrictEqual(original);
    });
  });
 
    // TODO: add tests for n yoon
  test('Should convert n kata ("ニ", "ナ", ...) to roma ("ni", "na", ...) when n and $vowel enabled and plugin gets disabled', () => {
    document.body.innerHTML = basic;

    const original = document.body.textContent;

    const vowels = ['a', 'i', 'u', 'e', 'o'];
    const hiras = ['ナ', 'ニ', 'ヌ', 'ネ', 'ノ'];
    const hirasComb = ['ンア', 'ンイ', 'ンウ', 'ンエ', 'ンオ'];

    vowels.forEach((_: string, i: number) => {
      ContentScript.togglePluginListener({
        ...defaultJapanesifyState,
        kana: 'katakana',
        enabled: true,
        n: true,
        [vowels[i]]: true,
      });
      expect(document.body.textContent).not.toContain(hirasComb[i]);
      expect(document.body.textContent).toContain(hiras[i]);

      ContentScript.togglePluginListener({
        ...defaultJapanesifyState,
        kana: 'katakana',
        n: true,
        [vowels[i]]: true,
      });
      expect(document.body.textContent).toStrictEqual(original);
    });
  });

  test.each`
  kana
  ${'hiragana'}
  ${'katakana'}
  `('Should not convert roma to $kana if no vowel is checked is checked', ({kana}) => {
    document.body.innerHTML = basic;

    const original = document.body.textContent;

    ContentScript.togglePluginListener({
      ...defaultJapanesifyState,
      kana,
      enabled: true,
      han: true,
      dak: true,
      yoon: true,
    });
    expect(document.body.textContent).toStrictEqual(original);
  });

  test.each`
    vowel  | romas              | hiras
    ${'a'} | ${romaHanDakYoonA} | ${hiraHanDakYoonA}
    ${'i'} | ${romaHanDakI}     | ${hiraHanDakI}
    ${'u'} | ${romaHanDakYoonU} | ${hiraHanDakYoonU}
    ${'e'} | ${romaHanDakE}     | ${hiraHanDakE}
    ${'o'} | ${romaHanDakYoonO} | ${hiraHanDakYoonO}
  `(
    'Should convert "$romas" to "$hiras" and back if enable button gets toggled',
    ({ vowel, romas, hiras }) => {
      document.body.innerHTML = basic;

      const original = document.body.textContent;

      ContentScript.togglePluginListener({
        ...defaultJapanesifyState,
        enabled: true,
        [vowel]: true,
        dak: true,
        han: true,
        yoon: true,
      });
      romas.forEach((_: string, i: number) => {
        expect(document.body.textContent).not.toContain(romas[i]);
        expect(document.body.textContent).toContain(hiras[i]);
      });

      ContentScript.togglePluginListener({
        ...defaultJapanesifyState,
        [vowel]: true,
        dak: true,
        han: true,
        yoon: true,
      });
      expect(document.body.textContent).toStrictEqual(original);
    }
  );

  test.each`
    vowel  | romas              | katas
    ${'a'} | ${romaHanDakYoonA} | ${kataHanDakYoonA}
    ${'i'} | ${romaHanDakI}     | ${kataHanDakI}
    ${'u'} | ${romaHanDakYoonU} | ${kataHanDakYoonU}
    ${'e'} | ${romaHanDakE}     | ${kataHanDakE}
    ${'o'} | ${romaHanDakYoonO} | ${kataHanDakYoonO}
  `(
    'Should convert "$romas" to "$katas" and back if enable button gets toggled',
    ({ vowel, romas, katas }) => {
      document.body.innerHTML = basic;

      const original = document.body.textContent;

      ContentScript.togglePluginListener({
        ...defaultJapanesifyState,
        kana: 'katakana',
        enabled: true,
        [vowel]: true,
        dak: true,
        han: true,
        yoon: true,
      });
      romas.forEach((_: string, i: number) => {
        expect(document.body.textContent).not.toContain(romas[i]);
        expect(document.body.textContent).toContain(katas[i]);
      });

      ContentScript.togglePluginListener({
        ...defaultJapanesifyState,
        kana: 'katakana',
        [vowel]: true,
        dak: true,
        han: true,
        yoon: true,
      });
      expect(document.body.textContent).toStrictEqual(original);
    }
  );

  test.each`
    vowel  | romas              | hiras
    ${'a'} | ${romaHanDakYoonA} | ${hiraHanDakYoonA}
    ${'i'} | ${romaHanDakI}     | ${hiraHanDakI}
    ${'u'} | ${romaHanDakYoonU} | ${hiraHanDakYoonU}
    ${'e'} | ${romaHanDakE}     | ${hiraHanDakE}
    ${'o'} | ${romaHanDakYoonO} | ${hiraHanDakYoonO}
  `(
    'Should convert "$hiras" to "$romas" if "$vowel" gets disabled',
    ({ vowel, romas, hiras }) => {
      document.body.innerHTML = basic;

      const original = document.body.textContent;

      ContentScript.togglePluginListener({
        ...defaultJapanesifyState,
        enabled: true,
        [vowel]: true,
        dak: true,
        han: true,
        yoon: true,
      });
      romas.forEach((_: string, i: number) => {
        expect(document.body.textContent).not.toContain(romas[i]);
        expect(document.body.textContent).toContain(hiras[i]);
      });

      ContentScript.togglePluginListener({
        ...defaultJapanesifyState,
        enabled: true,
        dak: true,
        han: true,
        yoon: true,
      });
      expect(document.body.textContent).toStrictEqual(original);
    }
  );

    test.each`
    vowel  | romas              | katas
    ${'a'} | ${romaHanDakYoonA} | ${kataHanDakYoonA}
    ${'i'} | ${romaHanDakI}     | ${kataHanDakI}
    ${'u'} | ${romaHanDakYoonU} | ${kataHanDakYoonU}
    ${'e'} | ${romaHanDakE}     | ${kataHanDakE}
    ${'o'} | ${romaHanDakYoonO}     | ${kataHanDakYoonO}
  `(
    'Should convert "$katas" to "$romas" if "$vowel" gets disabled',
    ({ vowel, romas, katas }) => {
      document.body.innerHTML = basic;

      const original = document.body.textContent;

      ContentScript.togglePluginListener({
        ...defaultJapanesifyState,
        kana: 'katakana',
        enabled: true,
        [vowel]: true,
        dak: true,
        han: true,
        yoon: true,
      });
      romas.forEach((_: string, i: number) => {
        expect(document.body.textContent).not.toContain(romas[i]);
        expect(document.body.textContent).toContain(katas[i]);
      });

      ContentScript.togglePluginListener({
        ...defaultJapanesifyState,
        kana: 'katakana',
        enabled: true,
        dak: true,
        han: true,
        yoon: true,
      });
      expect(document.body.textContent).toStrictEqual(original);
    }
  );

  test.each`
    letter | hiras              | katas
    ${'n'} | ${hiraN}           | ${kataN}
    ${'a'} | ${hiraA}           | ${kataA}
    ${'a'} | ${hiraHanDakYoonA} | ${kataHanDakYoonA}
    ${'i'} | ${hiraI}           | ${kataI}
    ${'i'} | ${hiraHanDakI}     | ${kataHanDakI}
    ${'u'} | ${hiraU}           | ${kataU}
    ${'u'} | ${hiraHanDakYoonU} | ${kataHanDakYoonU}
    ${'e'} | ${hiraE}           | ${kataE}
    ${'e'} | ${hiraHanDakE}     | ${kataHanDakE}
    ${'o'} | ${hiraO}           | ${kataO}
    ${'o'} | ${hiraHanDakYoonO} | ${kataHanDakYoonO}
  `(
    'Should convert "$hiras" to "$katas" if dropdown changes',
    ({ letter, hiras, katas }) => {
      document.body.innerHTML = basic;

      ContentScript.togglePluginListener({
        ...defaultJapanesifyState,
        kana: 'hiragana',
        enabled: true,
        [letter]: true,
        dak: true,
        han: true,
        yoon: true,
      });
      hiras.forEach((_: string, i: number) => {
        expect(document.body.textContent).toContain(hiras[i]);
        expect(document.body.textContent).not.toContain(katas[i]);
      });

      ContentScript.togglePluginListener({
        ...defaultJapanesifyState,
        kana: 'katakana',
        [letter]: true,
        enabled: true,
        dak: true,
        han: true,
        yoon: true,
      });
      hiras.forEach((_: string, i: number) => {
        expect(document.body.textContent).toContain(katas[i]);
        expect(document.body.textContent).not.toContain(hiras[i]);
      });
    }
  );

  test.each`
    letter | hiras              | katas
    ${'n'} | ${hiraN}           | ${kataN}
    ${'a'} | ${hiraA}           | ${kataA}
    ${'a'} | ${hiraHanDakYoonA} | ${kataHanDakYoonA}
    ${'i'} | ${hiraI}           | ${kataI}
    ${'i'} | ${hiraHanDakI}     | ${kataHanDakI}
    ${'u'} | ${hiraU}           | ${kataU}
    ${'u'} | ${hiraHanDakYoonU} | ${kataHanDakYoonU}
    ${'e'} | ${hiraE}           | ${kataE}
    ${'e'} | ${hiraHanDakE}     | ${kataHanDakE}
    ${'o'} | ${hiraO}           | ${kataO}
    ${'o'} | ${hiraHanDakYoonO} | ${kataHanDakYoonO}
  `(
    'Should convert "$katas" to "$hiras" if dropdown changes',
    ({ letter, hiras, katas }) => {
      document.body.innerHTML = basic;

      ContentScript.togglePluginListener({
        ...defaultJapanesifyState,
        kana: 'katakana',
        enabled: true,
        [letter]: true,
        dak: true,
        han: true,
        yoon: true,
      });
      katas.forEach((_: string, i: number) => {
        expect(document.body.textContent).toContain(katas[i]);
        expect(document.body.textContent).not.toContain(hiras[i]);
      });

      ContentScript.togglePluginListener({
        ...defaultJapanesifyState,
        kana: 'hiragana',
        [letter]: true,
        enabled: true,
        dak: true,
        han: true,
        yoon: true,
      });
      katas.forEach((_: string, i: number) => {
        expect(document.body.textContent).toContain(hiras[i]);
        expect(document.body.textContent).not.toContain(katas[i]);
      });
    }
  );
});
