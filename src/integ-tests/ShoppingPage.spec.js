import { LocalStorageMock } from '@react-mock/localstorage';
import { fireEvent, waitForElement, render } from '@testing-library/react';
import React from 'react'
import ShoppingPage from '../components/VQStore'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
describe('Shopping Page tests', () => {

    it('validate the Shopping Page UI', async () => {
        const { getByLabelText, getByPlaceholderText, getByText } = renderShoppingPage()
        await waitForElement(() => getByText('Filter Authors'));
        
    })
});


function renderShoppingPage() {
    const history = createMemoryHistory();

    return render(
        <Router history={history}> 
            <ShoppingPage></ShoppingPage>
        </Router>)
}
