import { fireEvent, waitForElement, render } from '@testing-library/react';
import React from 'react'
import LoginPage from '../components/LoginPage'
import NavBar from '../components/NavContainer'
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
        const { getByText,getByLabelText,queryByText } = renderLoginPage();
        fireEvent.change(getByLabelText('Email'), { target: { value: 'chuck@vodqa' } });
        fireEvent.change(getByLabelText('Password'), { target: { value: 'admin' } });
        expect(queryByText('Please provide a valid email.')).toBeNull();
        expect(queryByText('Please provide a valid password. (atleast 1 char)')).toBeDefined();
    })

    it.skip('validate the Error messages on clicking validate', async () => {
        var { getByText, getByLabelText } = renderLoginPage();

        fireEvent.change(getByLabelText('Email'), { target: { value: 'chuck@aab' } });
        fireEvent.change(getByLabelText('Password'), { target: { value: 'admin' } });

        fireEvent.click(getByText('Sign In'));

        const history = createMemoryHistory();
        var { getByText } = render(<Router history={history}>
            <NavBar></NavBar>
        </Router>)
        await waitForElement(() => getByText('Sign Out'));
        expect(getByText('Sign Out')).toBeDefined();


    });

});

function renderLoginPage() {
    const history = createMemoryHistory();
    return render(<Router history={history}>
        <LoginPage></LoginPage>
    </Router>);
}

