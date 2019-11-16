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
    // beforeAll(() => {
    //     class LocalStorage {
    //         constructor() {
    //           this.store = {};
    //         }
          
    //         getItem(key) {
    //           return this.store[key] || null;
    //         }
          
    //         setItem(key, value) {
    //           this.store[key] = value.toString();
    //         }
          
    //         removeItem(key) {
    //           delete this.store[key];
    //         }
          
    //         reset() {
    //           this.store = {};
    //         }
    //       };
    //       global.localStorage = new LocalStorage;
        // global.localStorage.setItem('isLoggedIn','true');
    // });
    it('validate the Shopping Page UI', async () =>  {
        authService.authenticate();
        localStorage.setItem('isLoggedIn', true);
        console.log(localStorage.getItem('isLoggedIn'));
        const { getByLabelText, getByPlaceholderText, getByText } = renderNavigationBar()
        await waitForElement(() => getByText('VodQA-Bookstore'));
        // fireEvent.click(getByText('Shop'));
        await waitForElement(() => getByText('Sign Out'));
        expect(getByText('Sign Out')).toBeDefined();

    })
});


function renderNavigationBar() {
    localStorage.setItem('isLoggedIn', true);
    return render(

        // <LocalStorageMock items={{ isLoggedIn: 'true' }}>
            <NavigationBar></NavigationBar>
        // </LocalStorageMock>

    )
}
