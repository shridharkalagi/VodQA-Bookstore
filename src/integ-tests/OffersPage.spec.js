import { render } from '@testing-library/react';
import React from 'react'
import OffersPAge from '../components/OffersPage'
describe('Offers Page tests', () => {

    it('validate the offers', async () => {
        const { getByLabelText, getByText } = render(
            <OffersPAge></OffersPAge>
        )
        expect(getByText('OffersPage under construction')).toBeDefined();
    })
});

