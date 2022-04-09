import React from 'react'
import { render } from '@testing-library/react';
import Main from './Main';
import initialToDos from './../assets/data.json';

describe('<Main--import json />', () => {
  it('should load the data file correctly', async () => {
    const dataImported = initialToDos;
    const dataExpected = [{
      "id": expect.toEqual(expect.any(Number)),
      "task": expect.toEqual(expect.any(String)),
      "done": expect.toEqual(expect.any(Boolean))
    }];
    expect(dataImported).toMatchObject(dataExpected);
  })
});