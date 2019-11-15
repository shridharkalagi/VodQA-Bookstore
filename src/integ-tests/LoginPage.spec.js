import { fireEvent, waitForElement, render } from '@testing-library/react';
import React from 'react'
import LoginPage from '../components/LoginPage'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
describe('Login page tests', () => {

    it('validate the login Page UI', async () => {
        const { getByLabelText, getByPlaceholderText, getByText } = renderLoginPage()
        await waitForElement(() => getByText('Email'));
        expect(getByText('Email')).toBeDefined();
        expect(getByPlaceholderText('Password')).toBeDefined();
        expect(getByText('Validate')).toBeDefined();
        expect(getByText('Sign In')).toBeDefined();
    })

    it('validate the Error messages on clicking validate', async () => {
        const { getByText } = renderLoginPage();
        fireEvent.click(getByText('Validate'));
        expect(getByText('Please provide a valid email.')).toBeDefined();
        expect(getByText('Please provide a valid password. (atleast 1 char)')).toBeDefined();
    })
});

function renderLoginPage() {
    const history = createMemoryHistory();
    return render(<Router history={history}>
        <LoginPage></LoginPage>
    </Router>);
}

