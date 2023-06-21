/* import {describe, expect, it} from '@jest/globals'
import { render, screen, within } from '@testing-library/react';
import { Sidebar } from '../components/Sidebar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
describe('Sidebar', () => {
    const mockData = ['Antonette', 'Ervin Howell', 'Shanna@melissa.tv', 'anastasia.net'];
    beforeEach(() => {
        jest.spyOn(Sidebar, axios)
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
}); */

import axios from "axios";
import { QDB_HOST } from '../types/envconstants';
import { Sidebar } from "../components/Sidebar";
import {describe, expect, it} from '@jest/globals'
import { render, screen, within } from '@testing-library/react';

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Sidebar', () => {
  describe("when API call is successful", () => {
    it("should return users data", async () => {
      // given
      const mockData:any = ['Antonette', 'Ervin Howell', 'Shanna@melissa.tv', 'anastasia.net'];
      mockedAxios.get.mockResolvedValueOnce(mockData);

      // when
      const result =  <Sidebar/>;
      //render(<Sidebar/>)

      // then
      expect(jest.fn(mockedAxios)).toHaveBeenCalledWith(mockData);
      expect(result).toEqual(mockData);
      //expect(await screen.findByText('Antonette')).toBeCalled()
      //expect(await screen.findByText('Ervin Howell')).toBeCalled()

    });
  });
});
      