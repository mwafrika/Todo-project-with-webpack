/**
 * @jest-environment jsdom
 */

import * as Dom from '../index';

describe('To do test', () => {
  test('should update the index after removing a task', () => {
    const current = Dom.updateIndex([{ id: 0 }, { id: 1 }]);
    const update = Dom.updateIndex([{ id: 1 }, { id: 2 }]);
    expect(current).toBe(update);
  });
});
