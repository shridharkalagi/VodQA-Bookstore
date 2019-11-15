import { fireEvent, waitForElement, render } from '@testing-library/react';
// import { renderWithRouter } from './integRTLHeplers';
import VQStore from '../components/VQStore'
import React from 'react'
import HomePage from '../components/HomePage'
import axiosMock from 'axios';
jest.mock('axios');
import mock from './mock.json';
describe('Home page tests', () => {

    it('validate the Carousel on Home page', async () => {
        axiosMock.mockResolvedValueOnce({
            data: mock,
        });
        const { getByLabelText, getByText } = render(
            <HomePage></HomePage>
        )
        await waitForElement(() => getByText('OriginMock'));
        expect(getByText('OriginMock')).toBeDefined();
        expect(getByText('Sunday Times #1 Bestseller New York Times #1 Bestseller The global bestseller - Origin is the latest...')).toBeDefined();
    })
});

