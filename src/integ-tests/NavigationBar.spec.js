import { LocalStorageMock } from '@react-mock/localstorage';
import { fireEvent, waitForElement, render } from '@testing-library/react';
import React from 'react'
import NavigationBar from '../App'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
describe('Shopping Page tests', () => {

    it('validate the Shopping Page UI', async () => {
        localStorage.setItem('isLoggedIn', true);
        console.log(localStorage.getItem('isLoggedIn'));
        const { getByLabelText, getByPlaceholderText, getByText } = renderNavigationBar()
        await waitForElement(() => getByText('VodQA-Bookstore'));
        fireEvent.click(getByText('Shop'));
        expect(getByText('Sign Out')).toBeDefined();

    })
});


function renderNavigationBar() {
    return render(

        <LocalStorageMock items={{ isLoggedIn: 'true' }}>
            <NavigationBar></NavigationBar>
        </LocalStorageMock>

    )
}
