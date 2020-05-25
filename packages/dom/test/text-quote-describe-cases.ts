import { TextQuoteSelector } from "../../selector/src";
import { RangeInfo } from "./utils";

const testCases: {
  [name: string]: {
    html: string,
    range: RangeInfo,
    expected: TextQuoteSelector,
  }
} = {
  'simple': {
    html: '<b>lorem ipsum dolor amet yada yada</b>',
    range: {
      startContainerXPath: '//b/text()',
      startOffset: 12,
      endContainerXPath: '//b/text()',
      endOffset: 20,
    },
    expected: {
      type: 'TextQuoteSelector',
      exact: 'dolor am',
      prefix: '',
      suffix: '',
    },
  },
  'minimal prefix': {
    html: '<b>To annotate or not to annotate.</b>',
    range: {
      startContainerXPath: '//b/text()',
      startOffset: 22,
      endContainerXPath: '//b/text()',
      endOffset: 26,
    },
    expected: {
      type: 'TextQuoteSelector',
      exact: 'anno',
      prefix: 'to ',
      suffix: '',
    },
  },
  'minimal suffix': {
    html: '<b>To annotate or not to annotate.</b>',
    range: {
      startContainerXPath: '//b/text()',
      startOffset: 7,
      endContainerXPath: '//b/text()',
      endOffset: 11,
    },
    expected: {
      type: 'TextQuoteSelector',
      exact: 'tate',
      prefix: '',
      suffix: ' ',
    },
  },
  'use suffix for start of text': {
    html: '<b>to annotate or not to annotate.</b>',
    range: {
      startContainerXPath: '//b/text()',
      startOffset: 0,
      endContainerXPath: '//b/text()',
      endOffset: 2,
    },
    expected: {
      type: 'TextQuoteSelector',
      exact: 'to',
      prefix: '',
      suffix: ' annotate ',
    },
  },
  'use prefix for end of text': {
    html: '<b>To annotate or not to annotate</b>',
    range: {
      startContainerXPath: '//b/text()',
      startOffset: 26,
      endContainerXPath: '//b/text()',
      endOffset: 30,
    },
    expected: {
      type: 'TextQuoteSelector',
      exact: 'tate',
      prefix: 'to anno',
      suffix: '',
    },
  },

  // TODO test for:
  // emtpy range
  // empty scope
  // custom scope
  // element edges, across elements, etc.
};

export default testCases;
