import {describe, expect, it} from '@jest/globals'
import { render, screen, within } from '@testing-library/react';
import { Sidebar } from '../components/Sidebar';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
describe('Sidebar', () => {
    const mockData = ['Antonette', 'Ervin Howell', 'Shanna@melissa.tv', 'anastasia.net'];
    beforeEach(() => {
        jest.spyOn(Sidebar, 'fetchData')
        .mockImplementation(
            () => new Promise((res) => setTimeout(() => res(mockData), 200))
        );
    });
    
    it('displays the loading first and the data once fetched', () => {
        render(<Sidebar/>)
        
        expect(screen.getByText('Hello')).not.toBeNull;
        expect(screen.queryByText('Overview')).toBeNull();
        
         expect(screen.getByText('Calander')).not.toBeNull;
        
    });
});