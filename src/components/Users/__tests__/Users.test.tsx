import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { UserCard } from "components/UserCard";
import React from "react";

describe("<Users />", () => {
  it("should update sidebar state onClick", () => {
    const mockSetSidebarOpen = jest.fn();
    render(
      <UserCard
        iconText="GR"
        fullName="Geoffrey Richardson"
        jobTitle="Developer"
        handleClick={mockSetSidebarOpen}
      />
    );
    const handleClick = jest.spyOn(React, "useState");
    handleClick.mockImplementation((sidebarOpen: any = false) => [
      sidebarOpen,
      mockSetSidebarOpen,
    ]);
    fireEvent.click(screen.getByText("Geoffrey Richardson"));
    expect(mockSetSidebarOpen).toBeCalled();
  });
});
