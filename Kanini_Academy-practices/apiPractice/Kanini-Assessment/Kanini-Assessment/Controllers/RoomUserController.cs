﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Kanini_Assessment.Repository.HotelsUser;
using Kanini_Assessment.Repository.RoomUser;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Kanini_Assessment.Controllers
{
    [Route("api/User/[controller]")]
    [ApiController]
    public class RoomUserController : ControllerBase
    {
        private readonly IRoomUser _context;

        public RoomUserController(IRoomUser context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<RoomUserTable>>> GetAvailableRooms()
        {
            try
            {
                var ok = await _context.GetAvailableRooms();
                return Ok(ok);
            }
            catch (Exception err)
            {
                return BadRequest(err.Message);
            }
        }

        [HttpGet("AffordablePrice")]
        public async Task<ActionResult<IEnumerable<RoomUserTable>>> GetAffordablePriceRooms()
        {
            try
            {
                var ok = await _context.GetAffordablePriceRooms();
                return Ok(ok);
            }
            catch (Exception err)
            {
                return BadRequest(err.Message);
            }
        }

        [HttpGet("BookingStatus")]
        public async Task<ActionResult<IEnumerable<RoomUserTable>>> RoomBookingStatus()
        {
            try
            {
                var ok = await _context.RoomBookingStatus();
                return Ok(ok);
            }
            catch (Exception err)
            {
                return BadRequest(err.Message);
            }
        }

    }
}
