import { LocalStorageMock } from '@react-mock/localstorage';
import { fireEvent, waitForElement, render } from '@testing-library/react';
import React from 'react'
import NavigationBar from '../components/NavContainer'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { JestEnvironment } from '@jest/environment';
import { authService } from '../services/authService'
// import localStorage from global.localStorage;
// jest.mock('localStorage');

describe('Shopping Page tests', () => {

    it('validate the Shopping Page UI - Authenticate', async () => {
        authService.authenticate();
        // global.localStorage.setItem('isLoggedIn', true);
        // console.log(localStorage.getItem('isLoggedIn'));
        const { getByLabelText, getByPlaceholderText, getByText } = renderNavigationBar()
        await waitForElement(() => getByText('VodQA-Bookstore'));
        // fireEvent.click(getByText('Shop'));
        await waitForElement(() => getByText('Sign Out'));
        expect(getByText('Sign Out')).toBeDefined();

    })

    it('validate the Shopping Page UI', async () => {
        const { getByText } = renderNavigationBar()
        expect(getByText('VodQA-Bookstore')).toBeDefined();
        expect(getByText('Shop')).toBeDefined();
    })
});


function renderNavigationBar() {
    return render(
        <NavigationBar></NavigationBar>
    )
}
