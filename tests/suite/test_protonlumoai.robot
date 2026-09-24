*** Settings ***
Documentation    Test cases for proton-lumo-ai snap
Resource         kvm.resource


*** Test Cases ***
Proton Lumo AI Launches And Renders
    [Documentation]    Verify proton-lumo-ai snap launches and renders a UI on Mir
    [Tags]    smoke    yarf:certification_status: blocker
    Log Screenshot
