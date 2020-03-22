--------------------------------------------------------
--  File created - Sunday-March-22-2020   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Package PROFILEANALYSIS
--------------------------------------------------------

  CREATE OR REPLACE PACKAGE "DKE61"."PROFILEANALYSIS" AS
  /* TODO enter package declarations (types, exceptions, methods etc) here */ 
    FUNCTION PROFILE_VALUE(PROFILEID varchar2) RETURN FLOAT; -- returns the value of a profile
    PROCEDURE PRINT_LOW_VALUES_PROFILES;
    PROCEDURE PRINT_INF_VALUE( CLOSINGDATE IN DATE );
    PROCEDURE ADD_USERPROFILE_ATTR(
          iUserId IN VARCHAR2 
        , iAttr IN VARCHAR2 
        , attr_value IN VARCHAR2 
        );

END PROFILEANALYSIS;

/
