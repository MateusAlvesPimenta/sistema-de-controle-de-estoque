using Back_end.Models;
using Back_end.Services;
using Microsoft.AspNetCore.Mvc;

namespace Back_end.Controllers
{
    [ApiController]
    [Route("Controller")]
    public class SupplierController : ControllerBase
    {
        private readonly ISupplierService _supplierService;

        public SupplierController(ISupplierService supplierService)
        {
            _supplierService = supplierService;
        }

        [HttpGet("/GetAllSuppliers")]
        public async Task<IActionResult> GetAllSuppliers()
        {
            var suppliers = await _supplierService.GetAllSuppliers();

            if (suppliers.Count == 0)
            {
                return NotFound("No supplier found");
            }
            return Ok(suppliers);
        }

        [HttpGet("/GetSupplier/{id}")]
        public async Task<IActionResult> GetSupplierById(int id)
        {
            var supplier = await _supplierService.GetSupplierById(id);

            if (supplier == null)
            {
                return NotFound($"No supplier found with the id: {id}");
            }
            return Ok(supplier);
        }

        [HttpPost("/AddSupplier")]
        public async Task<IActionResult> AddSupplier(Supplier supplier)
        {
            await _supplierService.AddSupplier(supplier);

            return CreatedAtAction(nameof(GetSupplierById), new { id = supplier.SupplierId }, supplier);
        }

        [HttpPut("/UpdateSupplier/{id}")]
        public async Task<IActionResult> UpdateSupplier(int id, Supplier supplier)
        {
            await _supplierService.UpdateSupplier(id, supplier);

            return Ok("Supplier updated");
        }

        [HttpDelete("/DeleteSupplier/{id}")]
        public async Task<IActionResult> DeleteSupplier(int id)
        {
            var supplier = await _supplierService.GetSupplierById(id);

            if(supplier == null)
            {
                return NotFound($"No supplier found with the id: {id}");
            }
            await _supplierService.DeleteSupplier(supplier);

            return NoContent();
        }
    }
}