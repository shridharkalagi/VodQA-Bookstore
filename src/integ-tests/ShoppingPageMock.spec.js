// import { LocalStorageMock } from '@react-mock/localstorage';
import { fireEvent, waitForElement, render, getAllByText } from '@testing-library/react';
import React from 'react'
import ShoppingPage from '../components/VQStore'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import mock from './mock.json';
jest.mock('axios');
import axiosMock from 'axios';
describe('Shopping Page tests', () => {

    it('validate the Shopping Page UI', async () => {
        axiosMock.mockResolvedValueOnce({
            data: mock,
        });
        const { getAllByText, getByPlaceholderText, getByText ,queryByLabelText} = renderShoppingPage()
        await waitForElement(() => getByText('Filter Authors'));
        await waitForElement(() => queryByLabelText('Dan Brown'));
        fireEvent.click(queryByLabelText('Rujuta Divekar'));
        expect(getByText('Indian Superfoods Mock')).toBeDefined();
        expect(getAllByText('Add to Cart').length).toBe(1);

        expect(document.querySelectorAll('.card').length).toBe(1);
    })
});


function renderShoppingPage() {
    const history = createMemoryHistory();

    return render(
        <Router history={history}> 
            <ShoppingPage></ShoppingPage>
        </Router>)
}
